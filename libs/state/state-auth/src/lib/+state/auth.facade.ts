import { Injectable, inject } from '@angular/core';
import { LoginPayload, NewUser } from '@chat-client/models';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  loading$ = this.store.pipe(select(AuthSelectors.selectAuthLoading));
  error$ = this.store.pipe(select(AuthSelectors.selectAuthError));

  authenticateUser(loginPayload: LoginPayload) {
    this.dispatch(AuthActions.AuthenticateUser({ loginPayload }));
  }

  registerUser(user: NewUser) {
    this.dispatch(AuthActions.RegisterUser({ user }));
  }

  logout() {
    this.dispatch(AuthActions.Logout());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
