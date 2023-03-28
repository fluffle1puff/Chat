import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@chat-client/models';

@Component({
  selector: 'cc-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss'],
})
export class ChatUserListComponent {
  @Input() users?: User[];

  @Output() selectUser = new EventEmitter<User>();

  updateSelectedUser(user: User) {
    this.selectUser.emit(user);
  }

  usersTrackByFn(index: number, user: User) {
    return user.id;
  }
}
