
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';

import * as fromDashboard from './dashboard.page.reducer';
import * as fromWidget from './widget.reducer';
import * as fromQueries from './query.reducer';

import { DashboardPage, Widget } from '../models/dashboard';
import { map } from 'rxjs-compat/operator/map';

export interface DashboardState {
    pages: fromDashboard.State;
    widgets: fromWidget.State;
    queryResults : fromQueries.State
}

export interface State extends fromRoot.State {
    dashboard: DashboardState
}

export const reducers: ActionReducerMap<DashboardState> = {
    pages: fromDashboard.reducer,
    widgets: fromWidget.reducer,
    queryResults: fromQueries.reducer
};
export const getDashboard = createFeatureSelector<DashboardState>('dashboard');

export const selectWidgets = (state: State) => {
    return state.dashboard.widgets};

export const selectPages = (state: State) => state.dashboard.pages.pages;


export const selectPagesIds = createSelector(
    selectPages,
    (pages: any) => pages.map(page => page.id)
)

export const selectCurrentPage = createSelector(
    fromRoot.selectCurrentPageId,
    selectPages,
    (currentpage, pages) => {
        return pages.filter(page => (page.id == currentpage))[0]
        //    return {currentPage:currentpage, pages:pages}
    }

)

export const currentPageWithWidgets = createSelector(
    selectWidgets,
    selectCurrentPage,
    
    (widget,page ) => {
        if (page && widget && page.rows) {
            page.rows.map(row => {
                if (row.columns) {
                    row.columns.map(column => {
                        
                        // column.widget = widget[column.widgetId];

                    });
                }
                return row;
            }
        )
         } 
         if (page) return page;

        return {id:"mock", name:"missing", rows:[]};
    }

)



export const getResult =  (queryId:string) => createSelector(
    getDashboard,
    (db) => {
        
        return db.queryResults.results[queryId]
    }
)