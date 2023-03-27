import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagingComponent } from './chat-messaging.component';

describe('ChatMessagingComponent', () => {
  let component: ChatMessagingComponent;
  let fixture: ComponentFixture<ChatMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatMessagingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
