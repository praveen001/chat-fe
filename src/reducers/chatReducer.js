import {
  types
} from '../actions/chatActions';

const initialState = {
  message: '',
  messages: {},
  conversations: {},
  video: false,
  incomingVideoCall: false,
  incomingVideoCallFrom: '',
  incomingDescription: '',
  outgoingVideoCall: false,
  outgoingVideoCallTo: '',
  remoteDescription: undefined,
  remoteIceCandidates: [],
  localDescription: undefined,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.MESSAGE_CHANGE:
      return {
        ...state,
        message: action.payload.message,
      };

    case types.LOADED_MESSAGES:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.payload.email]: (state.conversations[action.payload.email] || []).slice().concat(action.payload.messages.filter(message => (state.conversations[action.payload.email] || []).indexOf(message._id) === -1).map(message => message._id)),
        },
        messages: action.payload.messages.reduce((acc, message) => {
          acc[message._id] = message;
          return acc;
        }, (state.messages)),
      };

    case types.RECEIVE_MESSAGE:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.payload.from]: (state.conversations[action.payload.from] || []).slice().concat([action.payload._id]),
        },
        messages: {
          ...state.messages,
          [action.payload._id]: action.payload,
        }
      };

    case types.SENT_MESSAGE:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.payload.to]: (state.conversations[action.payload.to] || []).slice().concat([action.payload._id]),
        },
        messages: {
          ...state.messages,
          [action.payload._id]: action.payload,
        }
      };

    case types.ACKNOWLEDGED_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload._id]: {
            ...state.messages[action.payload._id],
            received: true,
          },
        },
      };

    case types.SEND_MESSAGE:
      return {
        ...state,
        message: '',
      };

    case types.OPEN_VIDEO_CHAT:
      return {
        ...state,
        outgoingVideoCall: true,
        video: true,
        videoChatRecipient: action.payload.to,
      };

    case types.CLOSE_VIDEO_CHAT:
      return {
        ...state,
        video: false,
      };

    case types.SEND_VIDEO_REQUEST:
      return {
        ...state,
        outgoingVideoCall: true,
        outgoingVideoCallTo: action.payload.to,
        localDescription: action.payload.description,
      };

    case types.RECEIVE_VIDEO_REQUEST:
      return {
        ...state,
        video: true,
        outgoingVideoCall: false,
        incomingVideoCall: true,
        incomingVideoCallFrom: action.payload.from,
        remoteDescription: action.payload.description,
      };

    case types.ACCEPTED_VIDEO_REQUEST:
      return {
        ...state,
        remoteDescription: action.payload.description,
      };

    case types.RECEIVE_ICE_CANDIDATE:
      if (!action.payload.candidate) {
        return state;
      }
      const remoteIceCandidates = state.remoteIceCandidates.slice();
      remoteIceCandidates.push(action.payload.candidate);
      return {
        ...state,
        remoteIceCandidates,
      };

    default:
      return state;
  }
}