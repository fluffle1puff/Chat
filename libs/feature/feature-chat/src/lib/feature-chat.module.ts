import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './components/chats/chats.component';
import { ChatUserListComponent } from './components/chat-users/chat-user-list/chat-user-list.component';
import { ChatUserItemComponent } from './components/chat-users/chat-user-item/chat-user-item.component';
import { FeatureChatRoutingModule } from './feature-chat-routing.module';
import { ChatMessagingComponent } from './components/chat-messaging/chat-messaging.component';
import { StateChatModule } from '@chat-client/state/state-chat';
import { MatIconModule } from '@angular/material/icon';
import { UiTextareaModule } from '@chat-client/ui/ui-textarea';
import { UiButtonModule } from '@chat-client/ui/ui-button';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ChatRoomListComponent } from './components/chat-rooms/chat-room-list/chat-room-list.component';
import { ChatRoomItemComponent } from './components/chat-rooms/chat-room-item/chat-room-item.component';
import { ContactTabsComponent } from './components/contact-tabs/contact-tabs.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureChatRoutingModule,
    StateChatModule,
    MatIconModule,
    UiTextareaModule,
    UiButtonModule,
    NgScrollbarModule,
  ],
  declarations: [
    ChatsComponent,
    ChatUserListComponent,
    ChatUserItemComponent,
    ChatMessagingComponent,
    ChatHistoryComponent,
    ChatRoomListComponent,
    ChatRoomItemComponent,
    ContactTabsComponent,
  ],
})
export class FeatureChatModule {}
