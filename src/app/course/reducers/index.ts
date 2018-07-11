
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';

import * as fromCourses from './course.reducer';

export interface CoursesState {
    collection: fromCourses.State;
}

export interface State {
    courses: fromCourses.State;
}

export const reducers: ActionReducerMap<State> = {
    courses: fromCourses.reducer
};


export const selectCourses = (state: State) => state.courses.courses;
