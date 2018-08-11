import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../../layouts/Login/Login';

// actions
import {
  loginGoogleUser,
  loggedInUser,
} from '../../actions/userActions';

function mapStateToProp(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    loginGoogleUser,
    loggedInUser,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(Login);