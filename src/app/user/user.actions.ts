import { Action } from "@ngrx/store";
import { User } from "./models/user";

export const ActionTypes = {
  AUTHENTICATE: "[user] Authenticate",
  AUTHENTICATED: "[user] Authenticated",
  SIGN_OUT: "[user] Sign out",
  SIGNED_OUT: "[user] Signed out",
  SIGN_UP: "[user] Sign up",
  SIGNED_UP: "[user] Signed up"
};

export class AuthenticateAction implements Action {
  public type: string = ActionTypes.AUTHENTICATE;

  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticatedAction implements Action {
  public type: string = ActionTypes.AUTHENTICATED;

  constructor(public payload?: { token?: string }) {}
}

export class SignOutAction implements Action {
  public type: string = ActionTypes.SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignedOutAction implements Action {
  public type: string = ActionTypes.SIGNED_OUT;

  constructor(public payload?: any) {}
}

export class SignUpAction implements Action {
  public type: string = ActionTypes.SIGN_UP;

  constructor(public payload: { user: User }) {}
}

export class SignedUpAction implements Action {
  public type: string = ActionTypes.SIGNED_UP;
  constructor(public payload: { user: User }) {}
}

export type Actions =
  | AuthenticateAction
  | AuthenticatedAction
  | SignOutAction
  | SignedOutAction
  | SignUpAction
  | SignedUpAction;
