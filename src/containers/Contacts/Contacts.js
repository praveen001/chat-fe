import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Contacts from '../../components/Contacts/Contacts';

import {
  loadContacts
} from '../../actions/contactActions';

function mapStateToProp(state) {
  return {
    loading: state.contacts.loadingContacts,
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    loadContacts,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(Contacts);