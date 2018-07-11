import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  videoChatWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background: '#000',
    zIndex: 10,
  },
};

class VideoChat extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.chat.video === false && nextProps.chat.video === true) {
      this.getLocalStream();

      if (this.props.chat.outgoingCall) {
        this.makeCall();
      } else {
        // Incoming
      }
    }
  }

  getLocalStream = () => {
    const self = this;

    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
      // constraints
      {
        video: true,
        audio: false
      },

      // success callback
      function (mediaStream) {
        self.localStream = mediaStream;
        self.video1.srcObject = self.localStream;
        self.video1.play();
      },

      //handle error
      function (error) {
        console.log(error);
      }
    );
  }

  makeCall = () => {
    var servers = null;

    this.peerConnection1 = new RTCPeerConnection(servers);

    // Add Video Stream
    this.peerConnection1.addStream(this.localStream);

    this.peerConnection1.onicecandidate = (e) => {
      this.onIceCandidate(this.peerConnection1, e);
    };

    // Once remote stream arrives put it on video
    this.peerConnection1.onaddstream = (event) => {
      this.video2.srcObject = event.stream;
    };

    // Create offer
    console.log('creating offer');
    this.peerConnection1.createOffer((desc) => {
      this.props.sendVideoRequest(this.props.recipient, desc);
    });
  }

  onIceCandidate = (peerConnection, event) => {
    console.log('icecandidate', peerConnection, event);
  }

  render() {
    const { classes } = this.props;

    if (!this.props.chat.video) {
      return null;
    }

    return (
      <div
        className={classes.videoChatWrap}
      >
        Video Chat
        <video ref={elem => this.video1 = elem}></video>
        <video ref={elem => this.video2 = elem}></video>
        <button onClick={this.props.closeVideoChat}>Close</button>
      </div>
    );
  }
}

export default withStyles(styles)(VideoChat);