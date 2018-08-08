import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { map, take } from "rxjs/operators";

import { isAuthenticated, State } from "../reducers";

import * as AuthActions from '../user/user.actions';

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const observable = this.store.select(isAuthenticated);

    return this.store.pipe(
      select(isAuthenticated),
      map(authenticated => {
        if (!authenticated) {
          this.store.dispatch(new AuthActions.AuthenticationRedirectAction());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
