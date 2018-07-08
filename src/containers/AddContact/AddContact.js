import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddContact from '../../components/AddContact/AddContact';

// actions
import {
  addNewContact,
  closeAddContact,
  onEmailChange,
} from '../../actions/contactActions';

function mapStateToProp(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    addNewContact,
    closeAddContact,
    onEmailChange,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(AddContact);