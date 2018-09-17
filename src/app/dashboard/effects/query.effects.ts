import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinct';

import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store'

import * as QueryActions from '../actions/query.actions';

import { QueryService } from '../../core/services/query.service';


@Injectable()
export class QueryEffects {
    @Effect()
    init$: Observable<Action> = this.actions$
        .ofType(QueryActions.QueryActionTypes.Query)
        .distinct((QueryAction: QueryActions.Query) => QueryAction.payload.queryId)
        
    .mergeMap(
        (QueryAction:QueryActions.Query) => this.query.query(QueryAction.payload.queryId)
            .map(res => {
                return new QueryActions.QuerySuccess({queryId:QueryAction.payload.queryId, data:res});
            })
    );


    constructor(
        private actions$: Actions,
        private query: QueryService
    ) {

    }
}