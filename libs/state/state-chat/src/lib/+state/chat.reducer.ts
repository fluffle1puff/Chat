import { Message, NewRoom, Room, Tab, User } from '@chat-client/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ChatActions from './chat.actions';
import { ChatEntity } from './chat.models';

export const CHAT_FEATURE_KEY = 'chat';

export interface ChatState extends EntityState<ChatEntity> {
  currentUser?: User;
  users: User[];
  areUsersloading: boolean;
  error?: string | null;
  rooms: Room[];
  messages: Message[];
  selectedRoom?: Room;
  selectedContactsTab: Tab;
  creatingRoom?: NewRoom;
}

export interface ChatPartialState {
  readonly [CHAT_FEATURE_KEY]: ChatState;
}

export const chatAdapter: EntityAdapter<ChatEntity> = createEntityAdapter<ChatEntity>();

export const initialChatState: ChatState = chatAdapter.getInitialState({
  users: [],
  areUsersloading: false,
  messages: [],
  rooms: [],
  selectedContactsTab: Tab.ChatRooms,
  currentUser: undefined,
});

const reducer = createReducer(
  initialChatState,
  on(ChatActions.LoadAllUsers, (state) => ({
    ...state,
    areUsersloading: true,
    error: null
  })),
  on(ChatActions.LoadAllUsersSuccess, (state, { users }) => ({
    ...state,
    areUsersloading: false,
    users,
  })),
  on(ChatActions.LoadAllUsersFail, (state, { error }) => ({
    ...state,
    areUsersloading: false,
    error
  })),
  on(ChatActions.GetCurrentUserSuccess, (state, { currentUser }) => ({
    ...state,
    currentUser,
  })),
  on(ChatActions.GetUsersRoomsSuccess, (state, { rooms }) => ({
    ...state,
    rooms,
  })),
  on(ChatActions.GetMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(ChatActions.GetAddedMessageSuccess, (state, { addedMessage }) => ({
    ...state,
    messages: state.messages?.concat(addedMessage),
  })),
  on(ChatActions.SetSelectedRoomSuccess, (state, { room }) => ({
    ...state,
    selectedRoom: room,
  })),
  on(ChatActions.SetContactsTabSuccess, (state, { tab }) => ({
    ...state,
    selectedContactsTab: tab,
  })),
  on(ChatActions.CreateRoom, (state, { room }) => ({
    ...state,
    creatingRoom: room,
  })),
  on(ChatActions.ResetCreatingRoom, (state) => ({
    ...state,
    creatingRoom: undefined,
  })),
);

export function chatReducer(state: ChatState | undefined, action: Action) {
  return reducer(state, action);
}
