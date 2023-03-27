import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap, withLatestFrom } from 'rxjs';
import { ChatService } from '@chat-client/data-access/data-access-chat';
import { ChatFacade } from './chat.facade';
import { Room, Tab } from '@chat-client/models';
import * as ChatActions from './chat.actions';

@Injectable()
export class ChatEffects {
  private actions$ = inject(Actions);

  constructor(
    private chatService: ChatService,
    private chatFacade: ChatFacade,
  ) {}

  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.LoadAllUsers),
      switchMap(() => {
        return this.chatService.getAllUsers().pipe(
          switchMap((users) => [ChatActions.LoadAllUsersSuccess({ users })]),
          catchError((error) => of(ChatActions.LoadAllUsersFail(error)))
        );
      })
    )
  );

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetCurrentUser),
      switchMap(() => {
        return this.chatService.getLoggedInUser().pipe(
          switchMap((currentUser) => [ChatActions.GetCurrentUserSuccess({ currentUser })]),
          catchError((error) => of(ChatActions.GetCurrentUserFail(error)))
        );
      })
    )
  );

  GetCurrentUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetCurrentUserSuccess),
      tap(() => this.chatFacade.getUsersRooms())
    ),
    { dispatch: false }
  );

  createRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.CreateRoom),
      withLatestFrom(this.chatFacade.rooms$, ({ room }, rooms) => ({ room, rooms })),
      switchMap(({ room, rooms }) => {
        //Don't create a room if it already exists
        const isExists = rooms.some((item) => item.name === room.name);

        if (!isExists) {
          this.chatService.createRoom(room);
          return [
            ChatActions.SetContactsTab({ tab: Tab.ChatRooms }),
            ChatActions.CreateRoomSuccess()
          ];
        } else {
          const roomToSelect: Room | undefined = rooms.find((item) => item.name === room.name);

          return (!!roomToSelect)
          ? [
              ChatActions.SetContactsTab({ tab: Tab.ChatRooms }),
              ChatActions.SetSelectedRoom({ room: roomToSelect})
            ]
          : [ChatActions.CreateRoomFail()];
        }
      }),
    )
  );

  getUsersRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetUsersRooms),
      switchMap(() => {
        return this.chatService.getUsersRooms().pipe(
          switchMap((rooms) => [ChatActions.GetUsersRoomsSuccess({ rooms })]),
          catchError(() => of(ChatActions.GetUsersRoomsFail()))
        );
      })
    )
  );

  getUsersRoomsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChatActions.GetUsersRoomsSuccess),
        withLatestFrom(this.chatFacade.creatingRoom$, this.chatFacade.rooms$,
          (action, creatingRoom, rooms) => ({action, creatingRoom, rooms})),
        tap(({ action, creatingRoom, rooms }) => {
            //If a new room has been created select it
            if (!creatingRoom) return;

            const roomToSelect = rooms.find((room) => room.name === creatingRoom.name);
            if (!roomToSelect) return;

            this.chatFacade.setSelectedRoom(roomToSelect);
            this.chatFacade.resetCreatingRoom();
        })
      ),
    { dispatch: false }
  );

  joinRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.JoinRoom),
      tap(({ room }) => this.chatService.joinRoom(room)),
      switchMap(() => [ChatActions.JoinRoomSuccess()]),
      catchError(() => of(ChatActions.JoinRoomFail()))
    )
  );

  leaveRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.LeaveRoom),
      tap(({ room }) => this.chatService.leaveRoom(room)),
      switchMap(() => [ChatActions.LeaveRoomSuccess()]),
      catchError(() => of(ChatActions.LeaveRoomFail()))
    )
  );

  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.SendMessage),
      tap(({ message }) => this.chatService.sendMessage(message)),
      switchMap(() => [ChatActions.SendMessageSuccess()]),
      catchError(() => of(ChatActions.SendMessageFail()))
    )
  );

  getMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetMessages),
      switchMap(() => {
        return this.chatService.getMessages().pipe(
          switchMap((messages) => [ChatActions.GetMessagesSuccess({ messages })]),
          catchError(() => of(ChatActions.GetMessagesFail()))
        );
      })
    )
  );

  getAddedMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetAddedMessage),
      switchMap(() => {
        return this.chatService.getAddedMessage().pipe(
          switchMap((addedMessage) => [ChatActions.GetAddedMessageSuccess({ addedMessage })]),
          catchError(() => of(ChatActions.GetAddedMessageFail()))
        );
      })
    )
  );

  setSelectedRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.SetSelectedRoom),
      withLatestFrom(this.chatFacade.selectedRoom$, ({ room }, selectedRoom) => ({ room, selectedRoom })),
      switchMap(({ room, selectedRoom }) => {
        if (selectedRoom) {
          return [
            ChatActions.LeaveRoom({ room: selectedRoom }),
            ChatActions.SetSelectedRoomSuccess({ room }),
            ChatActions.JoinRoom({ room }),
          ];
        } else {
          return [
            ChatActions.SetSelectedRoomSuccess({ room }),
            ChatActions.JoinRoom({ room })
          ];
        }
      }),
      catchError(() => of(ChatActions.SetSelectedRoomFail()))
    )
  );

  setContactsTab$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.SetContactsTab),
      switchMap(({ tab }) => [ChatActions.SetContactsTabSuccess({ tab })]),
      catchError(() => of(ChatActions.SetContactsTabFail()))
    )
  );
}
