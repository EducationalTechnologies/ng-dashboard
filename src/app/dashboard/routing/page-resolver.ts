import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromDashboard from '../../reducers';
import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class PageResolver implements Resolve<void> {
    constructor(private store: Store<fromDashboard.State>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log("todo", "load", route.params.pageId)
        
        this.store.dispatch(new DashboardActions.DRLoad(route.params.pageId));
    }
}