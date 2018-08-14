import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { map, take } from "rxjs/operators";

import { isAuthenticated, State } from "../reducers";

import * as AuthActions from "../user/user.actions";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      select(isAuthenticated),
      map(authenticated => {
        return true;
        if (!authenticated) {
          this.router.navigate(["/user/signin"]);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
