import { LoginPayload, NewUser, User } from '@chat-client/models';
import { createAction, props } from '@ngrx/store';

export const AuthenticateUser = createAction('[Auth] Authenticate User', props<{ loginPayload: LoginPayload }>());

export const AuthenticateUserFail = createAction('[Auth] Authenticate User Fail');

export const AuthenticateUserSuccess = createAction('[Auth] Authenticate User Success');

export const RegisterUser = createAction('[Auth] Register User', props<{ user: NewUser }>());

export const RegisterUserSuccess = createAction('[Auth] Register User Success', props<{ user: User }>());

export const RegisterUserFail = createAction('[Auth] Register User Fail');

export const Logout = createAction('[Auth] Logout');

export const LogoutSuccess = createAction('[Auth] Logout Success');

export const LogoutFail = createAction('[Auth] Logout Fail');
