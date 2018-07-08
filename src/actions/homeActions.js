export const types = {
  LOADING_CONVERSATIONS: 'LOADING_CONVERSATIONS',
  LOAD_CONVERSATIONS: 'LOAD_CONVERSATIONS',
  LOADED_CONVERSATIONS: 'LOADED_CONVERSATIONS',
};

export const loadingConversations = () => {
  return {
    type: types.LOADING_CONVERSATIONS,
  };
}

export const loadConversations = () => {
  return {
    type: types.LOAD_CONVERSATIONS,
    payload: {

    },
  };
}

export const loadedConversations = () => {
  return {
    type: types.LOADED_CONVERSATIONS,
    payload: {

    },
  };
}