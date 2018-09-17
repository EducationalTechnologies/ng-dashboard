import {
    QueryActionTypes,
    QueryActionsUnion,
} from '../actions/query.actions';
import {
    createSelector,
    
} from '@ngrx/store';
import { ResultList } from '../models/query';

export interface State {
    loaded: boolean;
    results: ResultList;
}

const initialState: State = {
    loaded: false,
    results: {}
};



export function reducer(
    state = initialState,
    action: QueryActionsUnion
): State {
    switch (action.type) {
        
        case QueryActionTypes.QuerySuccess: {
            const returnState = {...state};
            returnState.results[action.payload.queryId] = action.payload.data
            return returnState
            
        }

        default: {
            return state;
        }
    }
}

export const getResults = (state: State) => state.results;



