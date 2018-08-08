import { Action } from "@ngrx/store";
import { User } from "./models/user";

export const ActionTypes = {
  AUTHENTICATE: "[user] Authenticate",
  AUTHENTICATION_SUCCESS: "[user] Authentication success",
  AUTHENTICATION_ERROR: "[user] Authentication error",
  AUTHENTICATED: "[user] Authenticated",
  SIGN_OUT: "[user] Sign out",
  SIGNED_OUT: "[user] Signed out",
  SIGN_UP: "[user] Sign up",
  SIGNED_UP: "[user] Signed up"
};

export class AuthenticateAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATE;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticationSucessAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATION_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class AuthenticationErrorAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATION_ERROR;

  constructor(public payload?: any) {}
}

export class AuthenticatedAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATED;

  constructor(public payload?: { token?: string }) {}
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
  | AuthenticationSucessAction
  | AuthenticationErrorAction
  | AuthenticatedAction
  | SignOutAction
  | SignedOutAction
  | SignUpAction
  | SignedUpAction;
