import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Websocket from '../../components/Websocket/Websocket';

import {
  connectSocket,
} from '../../actions/webSocketActions';

function mapStateToProp(state) {
  return {
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    connectSocket,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(Websocket);