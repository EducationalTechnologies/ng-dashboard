import {
    DashboardActionTypes,
    DashboardActionsUnion,
} from '../actions/dashboard.actions';

import { DashboardPage, DashboardPageRow } from '../models/dashboard';

export interface State {
    selectedPage:string;
    loaded: boolean;
    loading: boolean;
    pages: DashboardPage[];
}

const initialState: State = {
    selectedPage: "",
    loaded: false,
    loading: false,
    pages: [],
};



export function reducer(
    state = initialState,
    action: DashboardActionsUnion
): State {
    switch (action.type) {
        case DashboardActionTypes.SelectPage: {
            console.log({
                ...state,
                selectedPage: action.pageId,
            })
            return {
                ...state,
                selectedPage: action.pageId,
            };
        }
        case DashboardActionTypes.DPLoad: {
            return {
                ...state,
                loading: true,
            };
        }

        case DashboardActionTypes.DPLoadSuccess: {
            return {
                selectedPage: "",
                loaded: true,
                loading: false,
                pages: action.payload,
            };
        }
        case DashboardActionTypes.DRLoadSuccess:{
            if (state.pages) {
                state.pages.map(entry => {
                    if (entry.id == action.payload.pageId) {
                        entry.rows = action.payload.rows;
                    }
                })
            }
            return state;
        }

        case DashboardActionTypes.DCLoadSuccess:{
            if (state.pages) {
                state.pages.map(entry => {
                    if (entry.id == action.payload.pageId) {
                        entry.rows.map(row => {
                            if (row.id == action.payload.rowId) {
                                row.columns = action.payload.columns;
                            }
                        })
                    }
                })
            }
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getPages = (state: State) => state.pages;
