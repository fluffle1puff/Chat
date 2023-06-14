import { Component } from '@angular/core';
import { Message, NewMessage, NewRoom, Room, Tab, User } from '@chat-client/models';
import { ChatFacade } from '@chat-client/state/state-chat';
import { Observable } from 'rxjs';

@Component({
  selector: 'cc-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent {
  users$: Observable<User[]>;
  areUsersLoading$!: Observable<boolean>;
  rooms$: Observable<Room[]>;
  messages$: Observable<Message[]>;
  currentUser$: Observable<User | undefined>;
  selectedRoom$: Observable<Room | undefined>;
  selectedContactsTab$: Observable<Tab>;

  constructor(private chatFacade: ChatFacade) {
    this.chatFacade.loadAllUsers();
    this.chatFacade.getCurrentUser();
    this.chatFacade.getUsersRooms();
    this.chatFacade.getMessages();
    this.chatFacade.getAddedMessage();

    this.users$ = this.chatFacade.users$;
    this.areUsersLoading$ = this.chatFacade.areUsersLoading$;
    this.rooms$ = this.chatFacade.rooms$;
    this.messages$ = this.chatFacade.messages$;
    this.currentUser$ = this.chatFacade.currentUser$;
    this.selectedRoom$ = this.chatFacade.selectedRoom$;
    this.selectedContactsTab$ = this.chatFacade.selectedContactsTab$;
  }

  openRoom(user: User) {
    const room: NewRoom = {
      name: user.username,
      users: [user],
    };

    this.chatFacade.createRoom(room);
  }

  updateSelectedRoom(room: Room) {
    this.chatFacade.setSelectedRoom(room);
  }

  updateSelectedTab(tab: Tab) {
    this.chatFacade.setContactsTab(tab);
  }

  sendMessage(message: NewMessage) {
    this.chatFacade.sendMessage(message);
  }

  leaveRoom(room: Room) {
    this.chatFacade.leaveRoom(room);
  }
}
