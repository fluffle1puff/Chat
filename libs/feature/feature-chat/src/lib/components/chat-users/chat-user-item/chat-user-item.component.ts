import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@chat-client/models';

@Component({
  selector: 'cc-chat-user-item',
  templateUrl: './chat-user-item.component.html',
  styleUrls: ['./chat-user-item.component.scss'],
})
export class ChatUserItemComponent {
  @Input() user!: User;

  @Output() selectUser = new EventEmitter<User>();

  updateSelectedUser(user: User) {
    this.selectUser.emit(user);
  }
}
