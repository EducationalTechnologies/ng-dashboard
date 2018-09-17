import { UserActionsUnion, UserActionTypes } from "./user.actions";

import { User } from "./models/user";
import { Consent } from "./models/consent";
import { createSelector } from "@ngrx/store";
export interface UserState {
  authenticated: boolean;
  loading: boolean;
  user: User;
  consent: Consent;
}

const initialState: UserState = {
  loading: false,
  authenticated: false,
  user: null,
  consent: null
};

export function reducer(state: any = initialState, action: UserActionsUnion): UserState {
  switch (action.type) {
    case UserActionTypes.AUTHENTICATE:
    case UserActionTypes.CONSENT_RETRIEVE:
    case UserActionTypes.CONSENT_SUBMIT:
      return Object.assign({}, state, {
        loading: true
      });

    case UserActionTypes.AUTHENTICATION_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case UserActionTypes.CONSENT_RETRIEVE_SUCCESS:
      return Object.assign({}, state, {
        consent: action.payload.consent
      });

    case UserActionTypes.CONSENT_SUBMITTED_SUCCESS:
      return Object.assign({}, state, {
        consent: action.payload.consent,
        loading: false
      });

    case UserActionTypes.SIGNED_UP:
    case UserActionTypes.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        authenticated: true,
        user: action.payload.user
      });
    case UserActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      });
    case UserActionTypes.SIGN_UP:
    case UserActionTypes.SIGN_OUT:
      return Object.assign({}, state, {
        authenticated: false,
        error: null,
        loading: true
      });

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: null,
        user: null
      });

    default:
      return state;
  }
}

export const isAuthenticated = (state: UserState) => state.authenticated;

export const getAuthenticatedUser = (state: UserState) => state.user;

export const getConsent = (state: UserState) => state.consent;

export const isLoading = (state: UserState) => state.loading;

export const userState = (state: UserState) => state;

export const getConsentUser = createSelector(userState, getConsent);

export const getIsLoadingUser = createSelector(userState, isLoading);
