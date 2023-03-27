import { Component, Input } from '@angular/core';
import { Room } from '@chat-client/models';

@Component({
  selector: 'cc-chat-room-item',
  templateUrl: './chat-room-item.component.html',
  styleUrls: ['./chat-room-item.component.scss'],
})
export class ChatRoomItemComponent {
  @Input() room!: Room;
  @Input() isSelected!: boolean;
}
