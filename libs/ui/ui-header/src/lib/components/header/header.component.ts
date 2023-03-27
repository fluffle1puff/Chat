import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Theme, User } from '@chat-client/models';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  currentUser?: User;

  @Input()
  theme!: Theme;

  @Output() changeTheme = new EventEmitter<Theme>();
  @Output() logoutUser = new EventEmitter<boolean>();

  setTheme(theme: Theme) {
    this.changeTheme.emit(theme);
  }

  logout() {
    this.logoutUser.emit(true);
  }
}
