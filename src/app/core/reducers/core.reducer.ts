import { UserActionsUnion, UserActionTypes } from "../../user/user.actions";

export interface CoreState {
  loading: boolean;
}

const initialState: CoreState = {
  loading: false
};

export type ActionsUnion = UserActionsUnion;

export function reducer(state: any = initialState, action: ActionsUnion) {
  switch (action.type) {
    case UserActionTypes.AUTHENTICATE:
    case UserActionTypes.CONSENT_RETRIEVE:
    case UserActionTypes.CONSENT_SUBMIT:
      return Object.assign({}, state, {
        loading: true
      });
    case UserActionTypes.SIGN_OUT_SUCCESS:
    case UserActionTypes.CONSENT_RETRIEVE_SUCCESS:
    case UserActionTypes.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      });
  }
}

export const loading = (state: CoreState) => state.loading;
