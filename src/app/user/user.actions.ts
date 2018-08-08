import { Action } from "@ngrx/store";
import { User } from "./models/user";

export const ActionTypes = {
  AUTHENTICATE: "[user] Authenticate",
  AUTHENTICATION_SUCCESS: "[user] Authentication success",
  AUTHENTICATION_ERROR: "[user] Authentication error",
  AUTHENTICATION_REDIRECT: "[user] Authentication redirect",
  AUTHENTICATED: "[user] Authenticated",
  AUTHENTICATED_SUCCESS: "[user] Authenticated Success",
  SIGN_OUT: "[user] Sign out",
  SIGNED_OUT: "[user] Signed out",
  SIGN_UP: "[user] Sign up",
  SIGNED_UP: "[user] Signed up"
};

export class AuthenticateAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATE;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticationSuccessAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATION_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class AuthenticationErrorAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATION_ERROR;

  constructor(public payload?: any) {}
}

export class AuthenticationRedirectAction implements Action {
    public readonly type = ActionTypes.AUTHENTICATION_REDIRECT;

    constructor(public payload?: any) {}
}

export class AuthenticatedAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATED;

  constructor(public payload?: { token?: string }) {}
}

export class AuthenticatedSuccessAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATED_SUCCESS;

  constructor(public payload: { authenticated: boolean; user: User }) {}
}

export class SignOutAction implements Action {
  public readonly type: string = ActionTypes.SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignedOutAction implements Action {
  public readonly type: string = ActionTypes.SIGNED_OUT;

  constructor(public payload?: any) {}
}

export class SignUpAction implements Action {
  public readonly type: string = ActionTypes.SIGN_UP;

  constructor(public payload: { user: User }) {}
}

export class SignedUpAction implements Action {
  public readonly type: string = ActionTypes.SIGNED_UP;
  constructor(public payload: { user: User }) {}
}

export type Actions =
  | AuthenticateAction
  | AuthenticationSuccessAction
  | AuthenticationErrorAction
  | AuthenticationRedirectAction
  | AuthenticatedAction
  | AuthenticatedSuccessAction
  | SignOutAction
  | SignedOutAction
  | SignUpAction
  | SignedUpAction;
