import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { SocketService } from './socket.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ChatService,
    SocketService,
  ]
})
export class DataAccessChatModule {}
