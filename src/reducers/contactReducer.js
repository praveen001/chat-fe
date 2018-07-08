import { types } from '../actions/contactActions';

const initialState = {
  email: '',
  opened: false,
  emailExist: true,
  contacts: {},
  contactIds: [],
  loadingContacts: true,
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_ADD_CONTACT:
      return {
        ...state,
        opened: true,
      };

    case types.CLOSE_ADD_CONTACT:
      return {
        ...state,
        opened: false,
        email: '',
        emailExist: true,
      };

    case types.EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload.email,
      };

    case types.EMAIL_EXIST:
      return {
        ...state,
        emailExist: true,
      };

    case types.EMAIL_DOES_NOT_EXIST:
      return {
        ...state,
        emailExist: false,
      };

    case types.ADDED_NEW_CONTACT:
      const contactIds = state.contactIds.slice();
      contactIds.unshift(action.payload.email);
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [action.payload.email]: action.payload,
        },
        contactIds: contactIds,
      }

    case types.LOADING_CONTACTS:
      return {
        ...state,
        loadingContacts: true,
      };

    case types.LOADED_CONTACTS:
      return {
        ...state,
        contacts: action.payload.contacts.reduce((acc, contact) => {acc[contact.email] = contact; return acc;}, {}),
        contactIds: action.payload.contacts.map(contact => contact.email),
        loadingContacts: false,
      };

    default:
      return state;
  }
}
