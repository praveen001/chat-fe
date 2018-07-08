export const types = {
  OPEN_ADD_CONTACT: 'OPEN_ADD_CONTACT',
  CLOSE_ADD_CONTACT: 'CLOSE_ADD_CONTACT',
  EMAIL_CHANGE: 'EMAIL_CHANGE',
  EMAIL_EXIST: 'EMAIL_EXIST',
  EMAIL_DOES_NOT_EXIST: 'EMAIL_DOES_NOT_EXIST',
  ADDING_NEW_CONTACT: 'ADDING_NEW_CONTACT',
  ADD_NEW_CONTACT: 'ADD_NEW_CONTACT',
  ADDED_NEW_CONTACT: 'ADDED_NEW_CONTACT',
  LOADING_CONTACTS: 'LOADING_CONTACTS',
  LOAD_CONTACTS: 'LOAD_CONTACTS',
  LOADED_CONTACTS: 'LOADED_CONTACTS',
};

export const openAddContact = () => {
  return {
    type: types.OPEN_ADD_CONTACT,
  };
}

export const closeAddContact = () => {
  return {
    type: types.CLOSE_ADD_CONTACT,
  };
}

export const onEmailChange = (email) => {
  return {
    type: types.EMAIL_CHANGE,
    payload: {
      email,
    },
  };
}

export const emailExist = () => {
  return {
    type: types.EMAIL_EXIST,
  };
}

export const emailDoesNotExist = () => {
  return {
    type: types.EMAIL_DOES_NOT_EXIST,
  };
}

export const addingNewContact = () => {
  return {
    type: types.ADDING_NEW_CONTACT,
  };
}

export const addNewContact = (email) => {
  return {
    type: types.ADD_NEW_CONTACT,
    payload: {
      email,
    }
  }
}

export const addedNewContact = (userObject) => {
  return {
    type: types.ADDED_NEW_CONTACT,
    payload: userObject,
  };
}

export const loadingContacts = () => {
  return {
    type: types.LOADING_CONTACTS,
  };
}

export const loadContacts = () => {
  return {
    type: types.LOAD_CONTACTS,
  };
}

export const loadedContacts = (contacts) => {
  return {
    type: types.LOADED_CONTACTS,
    payload: {
      contacts,
    },
  };
}