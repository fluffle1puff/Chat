import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPayload, TokenInfo, NewUser, User } from '@chat-client/models';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: LoginPayload): Observable<TokenInfo> {
    return this.httpClient.post<TokenInfo>('api/users/login', user);
  }

  register(user: NewUser): Observable<User> {
    return this.httpClient.post<User>('api/users', user);
  }
}
