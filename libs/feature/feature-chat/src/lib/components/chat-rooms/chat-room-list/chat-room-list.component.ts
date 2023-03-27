import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '@chat-client/models';

@Component({
  selector: 'cc-chat-room-list',
  templateUrl: './chat-room-list.component.html',
  styleUrls: ['./chat-room-list.component.scss'],
})
export class ChatRoomListComponent {
  @Input() rooms!: Room[];
  @Input() selectedRoom?: Room;

  @Output() selectRoom = new EventEmitter<Room>();

  updateSelectedRoom(room: Room) {
    this.selectRoom.emit(room);
  }

  roomsTrackByFn(index: number, room: Room) {
    return room.id;
  }
}
