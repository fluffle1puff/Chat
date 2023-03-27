import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message, NewMessage, Room, User } from '@chat-client/models';

@Component({
  selector: 'cc-chat-messaging',
  templateUrl: './chat-messaging.component.html',
  styleUrls: ['./chat-messaging.component.scss'],
})
export class ChatMessagingComponent {
  @Input() chatRoom?: Room;
  @Input() messages?: Message[];
  @Input() currentUser?: User;

  @Output() destroyChatMessagin = new EventEmitter<Room>();
  @Output() createNewMessage = new EventEmitter<NewMessage>();

  message: string = '';

  ngOnDestroy() {
    if (this.chatRoom) this.destroyChatMessagin.emit(this.chatRoom);
  }

  createMessage() {
    const message = this.message.trim();
    if (!message || this.chatRoom === undefined) return;

    const newMessage: NewMessage = {
      text: message,
      room: this.chatRoom,
    }

    if (this.chatRoom) this.createNewMessage.emit(newMessage);
    this.message = '';
  }
}
