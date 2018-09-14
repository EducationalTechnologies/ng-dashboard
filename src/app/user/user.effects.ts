import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { UserService } from "../core/services/user.service";

import { User } from "./models/user";

import {
  ActionTypes,
  AuthenticateAction,
  AuthenticatedSuccessAction,
  AuthenticationSuccessAction,
  AuthenticationErrorAction,
  ConsentSubmitAction,
  ConsentSubmitErrorAction,
  ConsentSubmitSuccessAction,
  SignedOutAction,
  SignedUpAction,
  SignOutAction,
  SignUpAction,
  ConsentRetrieveAction,
  ConsentRetrieveSuccessAction,
  ConsentRetrieveErrorAction,
  SignOutSuccessAction,
  SignoutErrorAction,
  TokenSessionLoginAction,
  AuthenticationRedirectAction
} from "./user.actions";
import { Router } from "../../../node_modules/@angular/router";
import { ConsentService } from "./services/consent.service";
import { ApiService } from "../core/services";

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private consentService: ConsentService,
    private router: Router,
    private apiService: ApiService
  ) {}

  @Effect()
  public authenticate: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATE)
    .map((action: AuthenticateAction) => action.payload)
    .switchMap(payload => {
      return this.userService
        .signIn(payload.email, payload.password)
        .pipe(
          map(
            user => new AuthenticationSuccessAction({ user: user }),
            catchError(error =>
              of(new AuthenticationErrorAction({ error: error }))
            )
          )
        );
    });

  @Effect()
  public tokenLogin: Observable<Action> = this.actions
    .ofType(ActionTypes.TOKEN_SESSION_LOGIN)
    .map((action: TokenSessionLoginAction) => action.payload)
    .switchMap(payoad => {
      console.log("Retrieving User");
      return this.apiService.get("/user").pipe(
        map(user => {
          console.log("Retrieved user: ", user);
          if (user) {
            return new AuthenticationSuccessAction({ user: user });
          } else {
            return new AuthenticationRedirectAction();
          }
        }),
        catchError(error => {
          return of(new AuthenticationErrorAction({ error: error }));
        })
      );
    });

  @Effect()
  public signOut: Observable<Action> = this.actions
    .ofType(ActionTypes.SIGN_OUT)
    .map((action: SignOutAction) => action.payload)
    .switchMap(payload => {
      return this.userService.signOut().pipe(
        map(result => new SignOutSuccessAction()),
        catchError(error => of(new SignoutErrorAction({ error: error })))
      );
    });

  @Effect({ dispatch: false })
  public authenticatedSuccess = this.actions
    .ofType(ActionTypes.AUTHENTICATION_SUCCESS)
    .pipe(
      tap(() => {
        this.router.navigate(["/courses"]);
      })
    );

  @Effect({ dispatch: false })
  public authenticationRedirect = this.actions
    .ofType(ActionTypes.AUTHENTICATION_REDIRECT)
    .pipe(
      tap(() => {
        this.router.navigate(["/user/signin"]);
      })
    );

  @Effect()
  public consentSubmitted: Observable<Action> = this.actions
    .ofType(ActionTypes.CONSENT_SUBMIT)
    .map((action: ConsentSubmitAction) => action.payload)
    .switchMap(payload => {
      return this.consentService.setConsent(payload.consent).pipe(
        map(() => new ConsentSubmitSuccessAction({ consent: payload.consent })),
        catchError(error => of(new ConsentSubmitErrorAction({ error: error })))
      );
    });

  @Effect()
  public consentRetrieve: Observable<Action> = this.actions
    .ofType(ActionTypes.CONSENT_RETRIEVE)
    .switchMap(() => {
      return this.consentService.getConsent().pipe(
        map(consent => new ConsentRetrieveSuccessAction({ consent: consent })),
        catchError(error => of(new ConsentRetrieveErrorAction({ error })))
      );
    });
}
