import {
    CourseActionTypes,
    CourseActionsUnion,
} from './../actions/course.actions';

import { Course } from '../models/course';

export interface State {
    loaded: boolean;
    loading: boolean;
    courses: Course[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    courses: [],
};

export function reducer(
    state = initialState,
    action: CourseActionsUnion
): State {
    switch (action.type) {
        case CourseActionTypes.Load: {
            return {
                ...state,
                loading: true,
            };
        }

        case CourseActionTypes.LoadSuccess: {
            return {
                loaded: true,
                loading: false,
                courses: action.payload,
            };
        }


        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getCourses = (state: State) => state.courses;
