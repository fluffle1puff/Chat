import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CHAT_FEATURE_KEY, ChatState } from './chat.reducer';
import { sortBy } from 'lodash';

export const selectChatState = createFeatureSelector<ChatState>(CHAT_FEATURE_KEY);

export const selectAreUsersLoading = createSelector(selectChatState, (state: ChatState) => state.areUsersloading);

export const selectChatCurrentUsers = createSelector(selectChatState, (state: ChatState) => state.currentUser);

export const selectChatUsers = createSelector(selectChatState, (state: ChatState) => state.users.filter((user) => user.id !== state.currentUser?.id));

export const selectChatError = createSelector(selectChatState, (state: ChatState) => state.error);

export const selectUsersRooms = createSelector(selectChatState, (state: ChatState) =>
  state.rooms.map((room) => ({
    ...room,
    users: room.users.filter((user) => user.id !== state.currentUser?.id),
    chatName: room.users.find((user) => user.id !== state.currentUser?.id)?.username,
  }))
);

export const selectMessages = createSelector(selectChatState, (state: ChatState) => state.messages ? sortBy(state.messages, ['id']) : []);

export const selectSelectedRoom = createSelector(selectChatState, (state: ChatState) => state.selectedRoom);

export const selectSelectedContactsTab = createSelector(selectChatState, (state: ChatState) => state.selectedContactsTab);

export const selectCreatingRoom = createSelector(selectChatState, (state: ChatState) => state.creatingRoom);
