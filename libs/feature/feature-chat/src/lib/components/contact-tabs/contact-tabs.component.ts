import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room, Tab, User } from '@chat-client/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'cc-contact-tabs',
  templateUrl: './contact-tabs.component.html',
  styleUrls: ['./contact-tabs.component.scss'],
})
export class ContactTabsComponent {
  @Input() users$!: Observable<User[]>;
  @Input() rooms$!: Observable<Room[]>;
  @Input() selectedTab$!: Observable<Tab>;
  @Input() selectedRoom$!: Observable<Room | undefined>;

  @Output() selectUserToText = new EventEmitter<User>();
  @Output() selectRoom = new EventEmitter<Room>();
  @Output() selectTab = new EventEmitter<Tab>();

  Tab = Tab;

  updateSelectedRoom(room: Room) {
    this.selectRoom.emit(room);
  }

  updateSelectedUserToText(user: User) {
    this.selectUserToText.emit(user);
  }

  selectContactsTab(nextTab: Tab, selectedTab: Tab | null) {
    if (selectedTab === nextTab) return;
    this.selectTab.emit(nextTab);
  }
}
