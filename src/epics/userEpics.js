import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import axios from '../axios';

import {
  types,
  loggingInUser,
  loginGoogleUser,
  loggedInUser,
} from '../actions/userActions';

export const loginGoogleUserEpic = action$ =>
  action$.ofType(types.LOGIN_GOOGLE_USER)
    .mergeMap(action =>
      Observable.fromPromise(axios.post('users/login/google', action.payload.requestPayload))
        .map(response => loggedInUser(response.data))
        .startWith(loggingInUser())
    );

export default combineEpics(
  loginGoogleUserEpic
);