import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinct';
import { combineAll, mergeAll } from 'rxjs/operators';

import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store'

import * as DashboardActions from '../actions/dashboard.actions';
import { DashboardService } from '../../core/services/dashboard.service';
import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';
import { DashboardPage, DashboardPageRow, DashboardPageColumn } from '../models/dashboard';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';


@Injectable()
export class DashboardEffects {
    @Effect()
    init$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DPLoad)
        .switchMap(
            payload => this.dashboard.listPages()
                .map(res => {
                    // console.log(res);
                    return new DashboardActions.DPLoadSuccess(res);
                })

        );

    @Effect()
    initRows$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DRLoad)
        .distinct( (drload: DashboardActions.DRLoad) => drload.pageId)
        .switchMap(
            (drload: DashboardActions.DRLoad) => this.dashboard.listRows(drload.pageId)
                .map(res => {
                    return new DashboardActions.DRLoadSuccess({ pageId: drload.pageId, rows: res });
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
                        rowId => this.dashboard.listColumns(rowId)
                            .map(res => {
                                var drls = new DashboardActions.DCLoadSuccess({ pageId: drloadsuccess.payload.pageId, rowId: rowId, columns: res })
                                return drls;
                            })
                    )

        )
        .pipe(mergeAll());

    @Effect()
    loadWidgets$: Observable<Action> = this.actions$
        .ofType(DashboardActions.DashboardActionTypes.DCLoadSuccess)
        .distinct((drloadsuccess: DashboardActions.DCLoadSuccess) => drloadsuccess.payload.rowId)
       .pipe(x=>{x.subscribe(y=>console.log('YYYY', y));return x})

        .map(
            (drloadsuccess: DashboardActions.DCLoadSuccess) =>
                from(drloadsuccess.payload.columns).distinct(col => col.widgetId)
                    .pipe(map((row: DashboardPageColumn) => row.widgetId))
        )
        .pipe(mergeAll())
        // .pipe(x=>{x.subscribe(y=>console.log('YY', y));return x})
        .distinct(x => x)
        // .pipe(x=>{x.subscribe(y=>console.log('YYY', y));return x})
        .mergeMap(
            wId => this.dashboard.getWidget(wId)
                .map(res => {
                    var drls = new DashboardActions.WidgetLoadSuccess(res)
                    return drls;
                })
        )


        ;

    // @Effect()
    // loadWidgets$: Observable<Action> = this.actions$
    //     .ofType(DashboardActions.DashboardActionTypes.DCLoadSuccess)
    //     .distinct((drloadsuccess: DashboardActions.DCLoadSuccess) => drloadsuccess.payload.rowId)
    //     .map(
    //         (drloadsuccess: DashboardActions.DCLoadSuccess) =>
    //             from(drloadsuccess.payload.columns).distinct(col => col.widgetId)
    //                 .pipe(map((row: DashboardPageColumn) => row.widgetId))
    //                 .distinct(w => w)
    //                 .mergeMap(
    //                     wId => this.dashboard.getWidget(wId)
    //                         .map(res => {
    //                             console.log("widget res", res);
    //                             var drls = new DashboardActions.WidgetLoadSuccess(res)
    //                             return drls;
    //                         })
    //                 )

    //     )
    //     .pipe(mergeAll())
    //     ;

    // @Effect() routeChange$ = this.actions$
    // .ofType(ROUTER_NAVIGATION)
    // .pipe(map(x=>{
    //     console.log("router navigation effect", x)
    //     return new DashboardActions.DCLoadSuccess([]);
    // }));




    constructor(
        private actions$: Actions,
        private dashboard: DashboardService
        // @Inject('config') private config:any
    ) {

    }
}