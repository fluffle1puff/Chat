import { ChatEntity } from './chat.models';
import { chatAdapter, ChatPartialState, initialChatState } from './chat.reducer';
import * as ChatSelectors from './chat.selectors';

describe('Chat Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getChatId = (it: ChatEntity) => it.id;
  const createChatEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ChatEntity);

  let state: ChatPartialState;

  beforeEach(() => {
    state = {
      chat: chatAdapter.setAll([createChatEntity('PRODUCT-AAA'), createChatEntity('PRODUCT-BBB'), createChatEntity('PRODUCT-CCC')], {
        ...initialChatState,
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
      }),
    };
  });

  describe('Chat Selectors', () => {
    it('selectAllChat() should return the list of Chat', () => {
      const results = ChatSelectors.selectAllChat(state);
      const selId = getChatId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ChatSelectors.selectEntity(state) as ChatEntity;
      const selId = getChatId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectChatLoaded() should return the current "loaded" status', () => {
      const result = ChatSelectors.selectChatLoaded(state);

      expect(result).toBe(true);
    });

    it('selectChatError() should return the current "error" state', () => {
      const result = ChatSelectors.selectChatError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
