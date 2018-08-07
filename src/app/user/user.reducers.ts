import { Actions, ActionTypes } from "./user.actions";

import { User } from "./models/user";

export interface State {
  authenticated: boolean;
  loading: boolean;
  user: User;
}

const initialState: State = {
  loading: false,
  authenticated: false,
  user: null
};

export function reducer(state: any = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      return Object.assign({}, state, {
        loading: true
      });

    case ActionTypes.AUTHENTICATED:
      return Object.assign({}, state, {
        loading: true,
        authenticated: true,
        user: action.payload
      });

    case ActionTypes.SIGN_UP:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.payload
      });
  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const getAuthenticatedUser = (state: State) => state.user;

export const isLoading = (state: State) => state.loading;
