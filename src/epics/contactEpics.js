import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import axios from '../axios';

import {
  types,
  emailExist,
  emailDoesNotExist,
  addingNewContact,
  addedNewContact,
  loadedContacts,
  loadingContacts,
} from '../actions/contactActions';

export const onEmailChangeEpic = action$ =>
  action$.ofType(types.EMAIL_CHANGE)
    .switchMap(action =>
      Observable.fromPromise(axios.get(`contacts/exist/${action.payload.email}`))
        .map(response => {
          if (response.data) {
            return emailExist();
          }
          return emailDoesNotExist();
        })
        .catch(() => Observable.of(emailDoesNotExist()))
    );

export const addNewContactEpic = action$ =>
  action$.ofType(types.ADD_NEW_CONTACT)
    .mergeMap(action =>
      Observable.fromPromise(axios.post('contacts/add', action.payload))
        .mergeMap(response => [
          addedNewContact(response.data)
        ])
        .startWith(addingNewContact())
    );

export const loadContactsEpic = action$ =>
  action$.ofType(types.LOAD_CONTACTS)
    .mergeMap(action =>
      Observable.fromPromise(axios.get('contacts/'))
        .mergeMap(response => [
          loadedContacts(response.data)
        ])
        .startWith(loadingContacts())
    );

export default combineEpics(
  onEmailChangeEpic,
  addNewContactEpic,
  loadContactsEpic,
);