import { LogoutSuccess } from '@chat-client/state/state-auth';
import { ActionReducer } from '@ngrx/store';

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === LogoutSuccess.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
