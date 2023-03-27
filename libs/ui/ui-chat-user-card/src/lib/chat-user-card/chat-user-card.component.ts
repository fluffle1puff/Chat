import { Component, Input } from '@angular/core';
import { User } from '@chat-client/models';

@Component({
  selector: 'cc-chat-user-card',
  templateUrl: './chat-user-card.component.html',
  styleUrls: ['./chat-user-card.component.scss'],
})
export class ChatUserCardComponent {
  @Input() user!: User;
}
