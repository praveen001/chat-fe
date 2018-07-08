import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import axios from '../axios';

import {
  types,
  loadingMessages,
  loadedMessages,
} from '../actions/chatActions';

export const loadMessagesEpic = action$ =>
  action$.ofType(types.LOAD_MESSAGES)
    .mergeMap(action =>
      Observable.fromPromise(axios.get(`chats/${action.payload.email}`))
        .map(response => loadedMessages(action.payload.email, response.data))
        .startWith(loadingMessages())
    );

export default combineEpics(
  loadMessagesEpic,
);