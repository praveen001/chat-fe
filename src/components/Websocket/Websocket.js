import React from 'react';

class Websocket extends React.Component {
  componentDidMount() {
    this.props.connectSocket();
  }

  render() {
    return this.props.children;
  }
}

export default Websocket;