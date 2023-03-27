import { Injectable, inject } from '@angular/core';
import { Room, NewMessage, NewRoom, Tab } from '@chat-client/models';
import { select, Store, Action } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  private readonly store = inject(Store);

  areUsersLoading$ = this.store.pipe(select(ChatSelectors.selectAreUsersLoading));
  users$ = this.store.pipe(select(ChatSelectors.selectChatUsers));
  error$ = this.store.pipe(select(ChatSelectors.selectChatError));
  rooms$ = this.store.pipe(select(ChatSelectors.selectUsersRooms));
  messages$ = this.store.pipe(select(ChatSelectors.selectMessages));
  currentUser$ = this.store.pipe(select(ChatSelectors.selectChatCurrentUsers));
  selectedRoom$ = this.store.pipe(select(ChatSelectors.selectSelectedRoom));
  selectedContactsTab$ = this.store.pipe(select(ChatSelectors.selectSelectedContactsTab));
  creatingRoom$ = this.store.pipe(select(ChatSelectors.selectCreatingRoom));

  loadAllUsers() {
    this.dispatch(ChatActions.LoadAllUsers());
  }

  getCurrentUsers() {
    this.dispatch(ChatActions.GetCurrentUser());
  }

  createRoom(room: NewRoom) {
    this.dispatch(ChatActions.CreateRoom({ room }));
  }

  getUsersRooms() {
    this.dispatch(ChatActions.GetUsersRooms());
  }

  joinRoom(room: Room) {
    this.dispatch(ChatActions.JoinRoom({ room }));
  }

  leaveRoom(room: Room) {
    this.dispatch(ChatActions.LeaveRoom({ room }));
  }

  sendMessage(message: NewMessage) {
    this.dispatch(ChatActions.SendMessage({ message }));
  }

  getMessages() {
    this.dispatch(ChatActions.GetMessages());
  }

  getAddedMessage() {
    this.dispatch(ChatActions.GetAddedMessage());
  }

  setSelectedRoom(room: Room) {
    this.dispatch(ChatActions.SetSelectedRoom({ room }));
  }

  setContactsTab(tab: Tab) {
    this.dispatch(ChatActions.SetContactsTab({ tab }));
  }

  resetCreatingRoom() {
    this.dispatch(ChatActions.ResetCreatingRoom());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
