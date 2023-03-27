import { TokenInfo, User } from '@chat-client/models';
import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, catchError, of, tap } from 'rxjs';
import { AuthService } from '@chat-client/data-access/data-access-auth';
import { TokenStorageService } from '@chat-client/util/util-token-service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {}

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AuthenticateUser),
      switchMap(({ loginPayload }) => {
        return this.authService.login(loginPayload).pipe(
          tap((response: TokenInfo) => this.tokenStorageService.setApiToken(response.access_token)),
          switchMap(() => [AuthActions.AuthenticateUserSuccess()]),
          catchError(() => of(AuthActions.AuthenticateUserFail()))
        );
      })
    )
  );

  authenticateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AuthenticateUserSuccess),
        tap(() => {
          this.router.navigate(['/chats']);
        })
      ),
    { dispatch: false }
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RegisterUser),
      switchMap(({ user }) => {
        return this.authService.register(user).pipe(
          switchMap((user: User) => [AuthActions.RegisterUserSuccess({ user })]),
          catchError(() => of(AuthActions.RegisterUserFail()))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Logout),
      tap(() => {
        this.tokenStorageService.clearTokens();
        this.router.navigateByUrl('/auth/login');
      }),
      switchMap(() => [AuthActions.LogoutSuccess()]),
      catchError(() => of(AuthActions.LogoutFail()))
    )
  );
}

