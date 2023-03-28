import { Component, Input, SimpleChanges, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { Message, User } from '@chat-client/models';
import { isSameDay } from 'date-fns';
import { NgScrollbar} from 'ngx-scrollbar';

@Component({
  selector: 'cc-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent implements AfterViewInit, OnChanges {
  @ViewChild(NgScrollbar) scrollable!: NgScrollbar;

  @Input() messages?: Message[];
  @Input() currentUser?: User;

  ngAfterViewInit(): void {
    this.scrollToBottom(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messages'].currentValue.length !== changes['messages'].previousValue?.length) {
      setTimeout(() => this.scrollToBottom(0), 0);
    }
  }

  scrollToBottom(duration: number = 100) {
    if (!this.scrollable) return;
    this.scrollable.scrollTo({ bottom: 0, duration });
  }

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
