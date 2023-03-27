import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserItemComponent } from './chat-user-item.component';

describe('ChatUserItemComponent', () => {
  let component: ChatUserItemComponent;
  let fixture: ComponentFixture<ChatUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatUserItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
