
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';

import * as fromDashboard from './dashboard.page.reducer';
import * as fromWidget from './widget.reducer';

import { DashboardPage, Widget } from '../models/dashboard';
import { map } from '../../../../node_modules/rxjs-compat/operator/map';

export interface DashboardState {
    pages: fromDashboard.State;
    widgets: fromWidget.State;
}

export interface State extends fromRoot.State {
    dashboard: DashboardState
}

export const reducers: ActionReducerMap<DashboardState> = {
    pages: fromDashboard.reducer,
    widgets: fromWidget.reducer
};

export const selectWidgets = (state: State) => {
    console.log("select widgets", state.dashboard.widgets)
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
        console.log("currentPageWithWidgets1", page)
        if (page && widget && page.rows) {
            console.log("currentPageWithWidgets2", page.rows)
            page.rows.map(row => {
                if (row.columns) {
                    row.columns.map(column => {
                        console.log("currentPageWithWidgets3", column)
                        column.widget = widget[column.widgetId];

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