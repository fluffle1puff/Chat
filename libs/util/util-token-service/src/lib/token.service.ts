import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageKeysEnum } from '@chat-client/models';

@Injectable()
export class TokenStorageService {

  constructor(private jwtService: JwtHelperService) { }

  getApiToken(): string {
    return localStorage.getItem(LocalStorageKeysEnum.ACCESS_TOKEN) || '';
  }

  setApiToken(accessToken: string): void {
    localStorage.setItem(LocalStorageKeysEnum.ACCESS_TOKEN, accessToken);
  }

  clearTokens(): void {
    localStorage.removeItem(LocalStorageKeysEnum.ACCESS_TOKEN);
  }

  isTokenValid(): boolean {
    const token = this.getApiToken();

    return !token ? false : !this.jwtService.isTokenExpired(token);
  }
}
