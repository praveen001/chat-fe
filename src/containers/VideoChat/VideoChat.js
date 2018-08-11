import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VideoChat from '../../components/VideoChat/VideoChat';

// actions
import {
  sendVideoRequest,
  closeVideoChat,
  acceptVideoRequest,
  iceCandidateExchange,
} from '../../actions/chatActions';

function mapStateToProp(state) {
  return {
    chat: state.chat,
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    sendVideoRequest,
    closeVideoChat,
    acceptVideoRequest,
    iceCandidateExchange,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(VideoChat);