export const types = {
  MESSAGE_CHANGE: 'MESSAGE_CHANGE',
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
  SENT_MESSAGE: 'SENT_MESSAGE',
  LOADING_MESSAGES: 'LOADING_MESSAGES',
  LOAD_MESSAGES: 'LOAD_MESSAGES',
  LOADED_MESSAGES: 'LOADED_MESSAGES',
  SEND_MESSAGE: 'SEND_MESSAGE',
  ACKNOWLEDGED_MESSAGE: 'ACKNOWLEDGED_MESSAGE',
  OPEN_VIDEO_CHAT: 'OPEN_VIDEO_CHAT',
  CLOSE_VIDEO_CHAT: 'CLOSE_VIDEO_CHAT',
  SEND_VIDEO_REQUEST: 'SEND_VIDEO_REQUEST',
  RECEIVE_VIDEO_REQUEST: 'RECEIVE_VIDEO_REQUEST',
};

export const messageChange = (message) => {
  return {
    type: types.MESSAGE_CHANGE,
    payload: {
      message,
    },
  };
}

export const receiveMessage = (message) => {
  return {
    type: types.RECEIVE_MESSAGE,
    payload: message,
  };
}

export const sentMessage = (message) => {
  return {
    type: types.SENT_MESSAGE,
    payload: message,
  };
}

export const sendMessage = (message) => {
  return {
    type: types.SEND_MESSAGE,
    payload: {
      message,
    },
  };
};

export const loadingMessages = () => {
  return {
    type: types.LOADING_MESSAGES,
  };
}

export const loadMessages = (email) => {
  return {
    type: types.LOAD_MESSAGES,
    payload: {
      email,
    },
  };
}

export const loadedMessages = (email, messages) => {
  return {
    type: types.LOADED_MESSAGES,
    payload: {
      email,
      messages,
    },
  };
}

export const acknowledgeMessage = (acknowledgedMessage) => {
  return {
    type: types.ACKNOWLEDGED_MESSAGE,
    payload: acknowledgedMessage,
  };
}

export const openVideoChat = (to) => {
  return {
    type: types.OPEN_VIDEO_CHAT,
    payload: {
      to,
    },
  };
}

export const closeVideoChat = () => {
  return {
    type: types.CLOSE_VIDEO_CHAT,
  };
}

// When I call someone
export const sendVideoRequest = (to, description) => {
  return {
    type: types.SEND_VIDEO_REQUEST,
    payload: {
      to,
      description,
    },
  };
}

// When I get a call from someone
export const receiveVideoRequest = (data) => {
  return {
    type: types.RECEIVE_VIDEO_REQUEST,
    payload: {
      from: data.from,
    },
  };
}