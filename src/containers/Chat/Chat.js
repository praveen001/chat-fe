import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chat from '../../components/Chat/Chat';

import {
  messageChange,
  loadMessages,
  sendMessage,
  openVideoChat,
  closeVideoChat,
} from '../../actions/chatActions';

function mapStateToProp(state, props) {
  return {
    contact: state.contacts.contacts[props.match.params.email],
    chat: state.chat,
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    sendMessage,
    messageChange,
    loadMessages,
    openVideoChat,
    closeVideoChat,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(Chat);