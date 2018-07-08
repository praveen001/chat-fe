import {
  types 
} from '../actions/webSocketActions';

import {
  addNewContact,
} from '../actions/contactActions';

import {
  types as chatActionTypes,
  receiveMessage,
  sentMessage,
 } from '../actions/chatActions';

var socket = {};

const socketMiddleware = store => next => action => {
  switch (action.type) {
    case types.CONNECT_SOCKET:
      const state = store.getState();

      const token = state.user.user.token;
      socket = io(`http://localhost:3000?token=${token}`);

      socket.on('onReceiveMessage', (data) => {
        if (state.contacts.contacts[data.from] === undefined) {
          store.dispatch(addNewContact(data.from));
        }
        console.log('onreceivemessage', data);
        store.dispatch(receiveMessage(data));
      });

      socket.on('onSentMessage', (data) => {
        console.log('onsentmessage', data);
        store.dispatch(sentMessage(data));
      });
      break;

    case chatActionTypes.SEND_MESSAGE:
      socket.emit(action.payload.message.type, action.payload.message);
      break;

    default:
      break;
  }

  next(action);
};

export default socketMiddleware;