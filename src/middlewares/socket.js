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
  acknowledgeMessage,
  receiveVideoRequest,
  acceptedVideoRequest,
  receiveIceCandidate,
 } from '../actions/chatActions';

var socket = {};

const socketMiddleware = store => next => action => {
  switch (action.type) {
    case types.CONNECT_SOCKET:
      const state = store.getState();

      const token = state.user.user.token;
      socket = io(`https://localhost:3000?token=${token}`);

      socket.on('onReceiveMessage', (data, acknowledge) => {
        if (state.contacts.contacts[data.from] === undefined) {
          store.dispatch(addNewContact(data.from));
        }
        store.dispatch(receiveMessage(data));

        acknowledge(); // Tell sender that we received the message
      });

      socket.on('onSentMessage', (data) => {
        store.dispatch(sentMessage(data));
      });

      socket.on('onAcknowledgement', (acknowledgedMessage) => {
        store.dispatch(acknowledgeMessage(acknowledgedMessage));
      });

      socket.on('receiveVideoRequest', (data) => {
        console.log('receiving call');
        store.dispatch(receiveVideoRequest(data));
      });

      socket.on('acceptVideoRequest', (data) => {
        store.dispatch(acceptedVideoRequest(data));
      });

      socket.on('iceCandidateExchange', (data) => {
        store.dispatch(receiveIceCandidate(data));
      });

      break;

    case chatActionTypes.SEND_MESSAGE:
      socket.emit(action.payload.message.type, action.payload.message);
      break;

      case chatActionTypes.SEND_VIDEO_REQUEST:
      socket.emit('onSendVideoRequest', action.payload);
      break;

    case chatActionTypes.SEND_VIDEO_REQUEST:
      socket.emit('onSendVideoRequest', action.payload);
      break;

    case chatActionTypes.ACCEPT_VIDEO_REQUEST:
      socket.emit('onAcceptVideoRequest', action.payload);

    case chatActionTypes.ICE_CANDIDATE_EXCHANGE:
      socket.emit('iceCandidateExchange', action.payload);

    default:
      break;
  }

  next(action);
};

export default socketMiddleware;