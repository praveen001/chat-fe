import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header/Header';

import {
  openAddContact
} from '../../actions/contactActions';
import {
  logout
} from '../../actions/userActions';

function mapStateToProp(state) {
  return {
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    openAddContact,
    logout,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(Header);