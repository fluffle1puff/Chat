import { Message, NewMessage, NewRoom, Room, Tab, User } from '@chat-client/models';
import { createAction, props } from '@ngrx/store';

export const LoadAllUsers = createAction('[Chat] load All Users');

export const LoadAllUsersSuccess = createAction('[Chat] load All Users Success', props<{ users: User[] }>());

export const LoadAllUsersFail = createAction('[Chat] load All Users Fail', props<{ error: any}>());

export const GetCurrentUser = createAction('[Chat] Get Current User');

export const GetCurrentUserSuccess = createAction('[Chat] Get Current User Success', props<{ currentUser: User }>());

export const GetCurrentUserFail = createAction('[Chat] Get Current User Fail', props<{ error: any }>());

export const JoinRoom = createAction('[Chat] Join Room', props<{ room: Room }>());

export const JoinRoomSuccess = createAction('[Chat] Join Room Success');

export const JoinRoomFail = createAction('[Chat] Join Room Fail');

export const LeaveRoom = createAction('[Chat] Leave Room', props<{ room: Room }>());

export const LeaveRoomSuccess = createAction('[Chat] Leave Room Success');

export const LeaveRoomFail = createAction('[Chat] Leave Room Fail');

export const SendMessage = createAction('[Chat] Send Message', props<{ message: NewMessage }>());

export const SendMessageSuccess = createAction('[Chat] Send Message Success');

export const SendMessageFail = createAction('[Chat] Send Message Fail');

export const GetMessages = createAction('[Chat] Get Messages');

export const GetMessagesSuccess = createAction('[Chat] Get Messages Success', props<{ messages: Message[] }>());

export const GetMessagesFail = createAction('[Chat] Get Messages Fail');

export const GetUsersRooms = createAction('[Chat] Get Users Rooms');

export const GetUsersRoomsSuccess = createAction('[Chat] Get Users Rooms Success', props<{ rooms: Room[] }>());

export const GetUsersRoomsFail = createAction('[Chat] Get Users Rooms Fail');

export const CreateRoom = createAction('[Chat] Create Room', props<{ room: NewRoom }>());

export const CreateRoomSuccess = createAction('[Chat] Create Room Success');

export const CreateRoomFail = createAction('[Chat] Create Room Fail');

export const GetAddedMessage = createAction('[Chat] Get Added Message');

export const GetAddedMessageSuccess = createAction('[Chat] Get Added Message Success', props<{ addedMessage: Message }>());

export const GetAddedMessageFail = createAction('[Chat] Get Added Message Fail');

export const SetSelectedRoom = createAction('[Chat] Set Selected Room', props<{ room: Room }>());

export const SetSelectedRoomSuccess = createAction('[Chat] Set Selected Room Success', props<{ room: Room }>());

export const SetSelectedRoomFail = createAction('[Chat] Set Selected Room Fail');

export const SetContactsTab = createAction('[Chat] Set Contacts Tab', props<{ tab: Tab }>());

export const SetContactsTabSuccess = createAction('[Chat] Set Contacts Tab Success', props<{ tab: Tab }>());

export const SetContactsTabFail = createAction('[Chat] Set Contacts Tab Fail');

export const ResetCreatingRoom = createAction('[Chat] Reset Creating Room');
