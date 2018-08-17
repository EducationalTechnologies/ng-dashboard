import { Actions, ActionTypes } from "./user.actions";

import { User } from "./models/user";
import { Consent } from "./models/consent";

export interface State {
  authenticated: boolean;
  loading: boolean;
  user: User;
  consent: Consent;
}

const initialState: State = {
  loading: false,
  authenticated: false,
  user: null,
  consent: null
};

export function reducer(state: any = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
    case ActionTypes.CONSENT_RETRIEVE:
      return Object.assign({}, state, {
        loading: true
      });

    case ActionTypes.AUTHENTICATION_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case ActionTypes.CONSENT_RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        consent: action.payload.consent
      });

    case ActionTypes.CONSENT_SUBMITTED_SUCCESS:
      return Object.assign({}, state, {
        consent: action.payload.consent
      });

    case ActionTypes.SIGNED_UP:
    case ActionTypes.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        loading: true,
        authenticated: true,
        user: action.payload.user
      });
    case ActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        loading: false
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

    default:
      return state;
  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const getAuthenticatedUser = (state: State) => state.user;

export const getConsent = (state: State) => state.consent;

export const isLoading = (state: State) => state.loading;
