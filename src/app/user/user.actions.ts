import { Action } from "@ngrx/store";
import { User } from "./models/user";
import { Consent } from "./models/consent";

export const ActionTypes = {
  AUTHENTICATE: "[user] Authenticate",
  AUTHENTICATION_SUCCESS: "[user] Authentication success",
  AUTHENTICATION_ERROR: "[user] Authentication error",
  AUTHENTICATION_REDIRECT: "[user] Authentication redirect",
  AUTHENTICATED_SUCCESS: "[user] Authenticated Success",
  SIGN_OUT: "[user] Sign out",
  SIGNED_OUT: "[user] Signed out",
  SIGN_OUT_ERROR: "[user] Sign out error",
  SIGN_OUT_SUCCESS: "[user] Sign out success",
  SIGN_UP: "[user] Sign up",
  SIGNED_UP: "[user] Signed up",
  CONSENT_SUBMIT: "[user] Consent Submit",
  CONSENT_SUBMITTED_SUCCESS: "[user] Consent Submitted Success",
  CONSENT_SUBMITTED_ERROR: "[user] Consent Submitted Error",
  CONSENT_RETRIEVE: "[user] Consent Retrieve",
  CONSENT_RETRIEVE_SUCCESS: "[user] Consent Retrieve Success",
  CONSENT_RETRIEVE_ERROR: "[user] Consent Retrieve Error",
  TOKEN_SESSION_LOGIN: "[user] Token Session Login"
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

export class AuthenticatedSuccessAction implements Action {
  public readonly type: string = ActionTypes.AUTHENTICATED_SUCCESS;

  constructor(public payload: { authenticated: boolean; user: User }) {}
}

export class SignOutAction implements Action {
  public readonly type: string = ActionTypes.SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignOutSuccessAction implements Action {
  public readonly type: string = ActionTypes.SIGN_OUT_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignoutErrorAction implements Action {
  public readonly type: string = ActionTypes.SIGN_OUT_ERROR;
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

export class ConsentSubmitAction implements Action {
  public readonly type = ActionTypes.CONSENT_SUBMIT;
  constructor(public payload: { consent: Consent }) {}
}

export class ConsentSubmitSuccessAction implements Action {
  public readonly type = ActionTypes.CONSENT_SUBMITTED_SUCCESS;
  constructor(public payload: { consent: Consent }) {}
}

export class ConsentSubmitErrorAction implements Action {
  public readonly type = ActionTypes.CONSENT_SUBMITTED_SUCCESS;
  constructor(public payload?: any) {}
}

export class ConsentRetrieveAction implements Action {
  public readonly type = ActionTypes.CONSENT_RETRIEVE;
  constructor(public payload?: { user: User }) {}
}

export class ConsentRetrieveSuccessAction implements Action {
  public readonly type = ActionTypes.CONSENT_RETRIEVE_SUCCESS;
  constructor(public payload: { consent: Consent }) {}
}

export class ConsentRetrieveErrorAction implements Action {
  public readonly type = ActionTypes.CONSENT_RETRIEVE_SUCCESS;
  constructor(public payload?: any) {}
}

export class TokenSessionLoginAction implements Action {
  public readonly type = ActionTypes.TOKEN_SESSION_LOGIN;
  constructor(public payload?: any) {}
}

export type Actions =
  | AuthenticateAction
  | AuthenticationSuccessAction
  | AuthenticationErrorAction
  | AuthenticationRedirectAction
  | AuthenticatedSuccessAction
  | ConsentSubmitAction
  | ConsentSubmitSuccessAction
  | ConsentSubmitErrorAction
  | ConsentRetrieveAction
  | ConsentRetrieveSuccessAction
  | ConsentRetrieveErrorAction
  | SignOutAction
  | SignedOutAction
  | SignOutSuccessAction
  | SignUpAction
  | SignedUpAction
  | TokenSessionLoginAction;
