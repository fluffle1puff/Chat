import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SocketService } from './socket.service';
import {
  Message,
  MessagesDTO,
  messagesDTOToMessages,
  NewMessage,
  NewRoom,
  Room,
  RoomsDTO,
  roomsDTOToRooms,
  User,
  UsersDTO,
  usersDTOTOUsers,
} from '@chat-client/models';

@Injectable()
export class ChatService {
  constructor(
    private httpClient: HttpClient,
    private jwtService: JwtHelperService,
    private socket: SocketService,
  ) {}

  createRoom(room: NewRoom) {
    this.socket.emit('createRoom', room);
  }

  joinRoom(room: Room) {
    this.socket.emit('joinRoom', room);
  }

  leaveRoom(room: Room) {
    this.socket.emit('leaveRoom', room);
  }

  sendMessage(message: NewMessage) {
    this.socket.emit('addMessage', message);
  }

  getAddedMessage(): Observable<Message> {
    return this.socket.fromEvent<Message>('messageAdded');
  }

  getMessages(): Observable<Message[]> {
    return this.socket.fromEvent<MessagesDTO>('messages').pipe(map((response) => messagesDTOToMessages(response)));
  }

  getUsersRooms(): Observable<Room[]> {
    return this.socket.fromEvent<RoomsDTO>('rooms').pipe(map((response) => roomsDTOToRooms(response)));
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<UsersDTO>('api/users').pipe(map((response) => usersDTOTOUsers(response)));
  }

  getLoggedInUser(): Observable<User> {
    const decodedToken = this.jwtService.decodeToken();
    return of(decodedToken.user);
  }
}
