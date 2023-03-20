import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, NewUser, User } from '@chat-client/models';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('api/users/login', user);
  }

  register(user: NewUser): Observable<User> {
    return this.httpClient.post<User>('api/users', user);
  }
}
