import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatUserCardComponent } from './chat-user-card/chat-user-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [ChatUserCardComponent],
  exports: [ChatUserCardComponent]
})
export class UiChatUserCardModule {}
