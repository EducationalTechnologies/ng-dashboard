import { Injectable } from "@angular/core";

import { Effect, Actions} from "@ngrx/effects";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { UserService} from "../core/services/user.service";

import { User } from "../user/models/user";

import {
    ActionTypes,
    AuthenticateAction,
    AuthenticatedAction,
    SignedOutAction,
    SignedUpAction,
    SignOutAction,
    SignUpAction
} from "./user.actions";

@Injectable() 
export class UserEffects {

    constructor(
        private actions: Actions,
        private userService: UserService
    ){}

    // @Effect()
    // public authenticate: Observable<Action> = this.actions
    // .ofType(ActionTypes.AUTHENTICATE)
    // .debounceTime(500)
    // .map()
}