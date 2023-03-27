import { Component, Input } from '@angular/core';
import { Message, User } from '@chat-client/models';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'cc-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent {
  @Input() messages?: Message[];
  @Input() currentUser?: User;

  showDateIfNotSameDay(currentMessage: Message, previousMessage: Message): boolean {
    if (!previousMessage) return true;

    const currMessageDate = new Date(currentMessage.created_at);
    const prevMessageDate = new Date(previousMessage.created_at);

    return !isSameDay(currMessageDate, prevMessageDate);
  }

  messagesTrackByFn(index: number, message: Message) {
    return message.id;
  }
}
