import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { UserService } from "../core/services/user.service";

import { User } from "./models/user";

import {
  ActionTypes,
  AuthenticateAction,
  AuthenticationSuccessAction,
  AuthenticationErrorAction,
  AuthenticatedAction,
  SignedOutAction,
  SignedUpAction,
  SignOutAction,
  SignUpAction,
  AuthenticatedSuccessAction
} from "./user.actions";

@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private userService: UserService) {}

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
      return this.userService
        .authenticatedUser()
        .pipe(
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
}
