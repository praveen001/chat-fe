export const types = {
  LOGGING_IN_USER: 'LOGGING_IN_USER',
  LOGIN_GOOGLE_USER: 'LOGIN_GOOGLE_USER',
  LOGGED_IN_USER: 'LOGGED_IN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
};

export const loggingInUser = () => {
  return {
    type: types.LOGGING_IN_USER,
  };
}

export const loginGoogleUser = (token) => {
  return {
    type: types.LOGIN_GOOGLE_USER,
    payload: {
      requestPayload: {
        token,
      },
    },
  };
}

export const loggedInUser = (user, firstTime = true) => {
  if (firstTime) {
    localStorage.setItem('userObject', JSON.stringify(user));
  }
  return {
    type: types.LOGGED_IN_USER,
    payload: {
      user,
    },
  };
}

export const logout = () => {
  localStorage.removeItem('userObject');
  return {
    type: types.LOGOUT_USER,
  };
}