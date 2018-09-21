import {
    DashboardActionTypes,
    DashboardActionsUnion,
} from '../actions/dashboard.actions';

import { DashboardPage, DashboardPageRow, DashboardRowMap, DashboardPageColumnMap, DashboardPageMap } from '../models/dashboard';

export interface State {
    // selectedPage:string;
    loaded: boolean;
    loading: boolean;
    // pages: DashboardPage[];
    pagesMap: DashboardPageMap;
    rows: DashboardRowMap;
    columns:DashboardPageColumnMap;
}

const initialState: State = {
    // selectedPage: "",
    loaded: false,
    loading: false,
    // pages: [],
    pagesMap: {},
    rows: {},
    columns: {},
};



export function reducer(
    state = initialState,
    action: DashboardActionsUnion
): State {
    switch (action.type) {
        case DashboardActionTypes.DPLoad: {
            return {
                ...state,
                loading: true,
            };
        }

        case DashboardActionTypes.DPLoadSuccess: {
            var toReturn = {...state, loaded:true, loading:false};
           
            action.payload.pages.map(page=>{
                state.pagesMap[action.payload.courseId] = state.pagesMap[action.payload.courseId]|| {};
                
                state.pagesMap[action.payload.courseId][page.id] = page;
            })
            return {...toReturn};
        }
        case DashboardActionTypes.DRLoadSuccess:{
            return {...state, rows:{...state.rows, [action.payload.pageId] : action.payload.rows}};
        }

        case DashboardActionTypes.DCLoadSuccess:{
            return {...state, columns:{...state.columns, [action.payload.rowId]:action.payload.columns}};
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

// export const getPages = (state: State) => state.pages;
