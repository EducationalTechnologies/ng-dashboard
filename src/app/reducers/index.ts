import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";

import { routerReducer } from "@ngrx/router-store";
import * as fromRouter from "@ngrx/router-store";

import * as fromLayout from "../core/reducers/layout.reducer";

import * as user from "../user/user.reducers";

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState;
  user: user.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: routerReducer,
  user: user.reducer
};

export const getLayoutState = createFeatureSelector<fromLayout.State>("layout");

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);

export const getRouterState = (state: State) => state.router;

export const getUserState = (state: State) => state.user;

export const getAuthenticatedUser = createSelector(
  getUserState,
  user.getAuthenticatedUser
);

export const getConsent = createSelector(getUserState, user.getConsent);

export const isAuthenticated = createSelector(
  getUserState,
  user.isAuthenticated
);

export const getCurrentUrl = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => state.state.url
);

export const selectCurrentPageId = createSelector(
  getRouterState,
  router => router.state.root.firstChild.firstChild.params.pageId
);
