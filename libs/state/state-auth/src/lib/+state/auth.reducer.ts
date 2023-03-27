import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends EntityState<AuthEntity> {
  loading: boolean;
  error?: string | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<AuthEntity> =
  createEntityAdapter<AuthEntity>();

export const initialAuthState: AuthState = authAdapter.getInitialState({
  loading: false,
});

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.AuthenticateUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.AuthenticateUserSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.AuthenticateUserFail, (state) => ({
    ...state,
    loading: false,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
