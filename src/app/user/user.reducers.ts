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

    case ActionTypes.AUTHENTICATION_ERROR:
      return Object.assign({}, state, {
          authenticated: false,
          error: action.payload.error.message,
          loading: false
      });

    case ActionTypes.AUTHENTICATED:
    case ActionTypes.SIGNED_UP:
      return Object.assign({}, state, {
        loading: true,
        authenticated: true,
        user: action.payload
      });

    case ActionTypes.SIGN_UP:
    case ActionTypes.SIGN_OUT:
      return Object.assign({}, state, {
        authenticated: false,
        error: null,
        loading: true
      });

    case ActionTypes.SIGNED_OUT:
      return Object.assign({}, state, {
        authenticated: false,
        error: null,
        user: null
      });
  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const getAuthenticatedUser = (state: State) => state.user;

export const isLoading = (state: State) => state.loading;
