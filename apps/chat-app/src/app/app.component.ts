import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ChatFacade } from '@chat-client/state/state-chat';
import { Theme, User } from '@chat-client/models';
import { AuthFacade } from '@chat-client/state/state-auth';
import { ThemeService } from '@chat-client/util/util-theme-service';
import { TokenStorageService } from '@chat-client/util/util-token-service';

@Component({
  selector: 'chat-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: Theme;
  currentUser$?: Observable<User | undefined>;

  constructor(
    private chatFacade: ChatFacade,
    private themeService: ThemeService,
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService,
  ) {
    this.theme = this.themeService.getTheme();

    if (this.tokenStorageService.isTokenValid()) {
      this.chatFacade.getCurrentUser();
      this.currentUser$ = this.chatFacade.currentUser$;
    }
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  logout() {
    this.authFacade.logout();
  }
}
