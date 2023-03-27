import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ChatActions from './chat.actions';
import { ChatEffects } from './chat.effects';

describe('ChatEffects', () => {
  let actions: Observable<Action>;
  let effects: ChatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ChatEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(ChatEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ChatActions.initChat() });

      const expected = hot('-a-|', { a: ChatActions.loadChatSuccess({ chat: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
