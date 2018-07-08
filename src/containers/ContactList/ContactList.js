import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactList from '../../components/ContactList/ContactList';

function mapStateToProp(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(ContactList);