import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinct';
import { mergeAll } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store'

import * as DashboardActions from '../actions/dashboard.actions';
import { DashboardService } from '../../core/services/dashboard.service';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';
import { DashboardPageRow } from '../models/dashboard';


@Injectable()
export class DashboardEffects {
    @Effect()
    init$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DPLoad)
        .switchMap(
            (payload: DashboardActions.DPLoad) => this.dashboard.listPages(payload.payload.courseId)
                .map(res => {
                    return new DashboardActions.DPLoadSuccess({ courseId: payload.payload.courseId, pages: res });
                })

        );

    @Effect()
    initRows$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DRLoad)
        .distinct((drload: DashboardActions.DRLoad) => drload.payload.pageId)
        .switchMap(
            (drload: DashboardActions.DRLoad) => this.dashboard.listRows(drload.payload.courseId, drload.payload.pageId)
                .map(res => {
                    return new DashboardActions.DRLoadSuccess({ pageId: drload.payload.pageId, rows: res, courseId: drload.payload.courseId });
                })
        );

    @Effect()
    initColumns$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DRLoadSuccess)
        .distinct((drloadsuccess: DashboardActions.DRLoadSuccess) => drloadsuccess.payload.rows)

        .map(
            (drloadsuccess: DashboardActions.DRLoadSuccess) =>
                from(drloadsuccess.payload.rows)
                    .pipe(map((row: DashboardPageRow) => row.id))
                    .mergeMap(
                        rowId => this.dashboard.listColumns(drloadsuccess.payload.courseId, drloadsuccess.payload.pageId, rowId)
                            .map(res => {
                                var drls = new DashboardActions.DCLoadSuccess({ pageId: drloadsuccess.payload.pageId, rowId: rowId, columns: res })
                                return drls;
                            })
                    )

        )
        .pipe(mergeAll());

    constructor(
        private actions$: Actions,
        private dashboard: DashboardService
    ) {

    }
}