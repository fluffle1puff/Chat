import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectAuthLoading = createSelector(selectAuthState, (state: AuthState) => state.loading);

export const selectAuthError = createSelector(selectAuthState, (state: AuthState) => state.error);
