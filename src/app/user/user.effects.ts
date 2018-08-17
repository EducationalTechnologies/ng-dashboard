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
  AuthenticatedAction,
  ConsentSubmitAction,
  ConsentSubmitErrorAction,
  ConsentSubmitSuccessAction,
  SignedOutAction,
  SignedUpAction,
  SignOutAction,
  SignUpAction
} from "./user.actions";
import { Router } from "../../../node_modules/@angular/router";
import { ConsentService } from "./services/consent.service";

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private userService: UserService,
    private consentService: ConsentService,
    private router: Router
  ) {}

  @Effect()
  public authenticate: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATE)
    .debounceTime(500)
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
  public authenticated: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATED)
    .map((action: AuthenticatedAction) => action.payload)
    .switchMap(payload => {
      return this.userService.authenticatedUser().pipe(
        map(
          user =>
            new AuthenticatedSuccessAction({
              authenticated: user !== null,
              user
            }),
          catchError(error =>
            of(new AuthenticationErrorAction({ error: error }))
          )
        )
      );
    });

  @Effect({ dispatch: false })
  public authenticationRedirect = this.actions
    .ofType(ActionTypes.AUTHENTICATION_REDIRECT)
    .pipe(
      tap(() => {
        console.log("Navigating:");
        this.router.navigate(["/user/signin"]);
      })
    );

  @Effect()
  public consentSubmitted: Observable<Action> = this.actions
    .ofType(ActionTypes.CONSENT_SUBMIT)
    .map((action: ConsentSubmitAction) => action.payload)
    .switchMap(payload => {
      return this.consentService.setConsent(payload.user, payload.consent).pipe(
        map(() => new ConsentSubmitSuccessAction({ consent: payload.consent })),
        catchError(error => of(new ConsentSubmitErrorAction({ error: error })))
      );
    });
}
