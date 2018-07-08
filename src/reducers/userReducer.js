import { types } from '../actions/userActions';

const initialState = {
  isAuthenticated: false,
  user: {
    name: '',
    picture: '',
    email: '',
    token: '',
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGGED_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case types.LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
}
