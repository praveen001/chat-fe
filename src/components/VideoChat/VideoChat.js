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
  video: {
    height: '50%',
    width: '100%',
  }
};

class VideoChat extends React.Component {
  componentDidMount() {
    this.constraint = {
      video: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.chat.outgoingVideoCall && this.props.chat.outgoingVideoCall) {
      this.makeCall();
    }
    if (!prevProps.chat.incomingVideoCall && this.props.chat.incomingVideoCall) {
      this.receiveCall();
    }
    if (!prevProps.chat.remoteDescription && this.props.chat.remoteDescription) {
      this.setRemoteDescription(this.props.chat.remoteDescription);
    }
    if (prevProps.chat.remoteIceCandidates.length !== this.props.chat.remoteIceCandidates.length) {
      this.setRemoteIceCandidates(this.props.chat.remoteIceCandidates[this.props.chat.remoteIceCandidates.length - 1]);
    }
  }

  createConnection = () => {
    return new RTCPeerConnection(null);
  }

  getStream = () => {
    return navigator.mediaDevices.getUserMedia(this.constraint);
  }

  makeCall = () => {
    this.peerConnection1 = this.createConnection();

    this.getStream().then((localStream) => {
      this.video1.srcObject = localStream;
      return this.peerConnection1.addStream(localStream);
    }).then(() => {
      return this.peerConnection1.createOffer();
    }).then((offer) => {
      return this.peerConnection1.setLocalDescription(offer);
    }).then(() => {
      this.props.sendVideoRequest(this.props.chat.videoChatRecipient, this.peerConnection1.localDescription);
    });;

    this.peerConnection1.onicecandidate = this.onIceCandidate;
    this.peerConnection1.onaddstream = this.onAddStream;
  }

  receiveCall = () => {
    const remoteDescription = new RTCSessionDescription(this.props.chat.remoteDescription);
    this.peerConnection1 = this.createConnection();

    this.peerConnection1.setRemoteDescription(remoteDescription).then(() => {
      return this.getStream();
    }).then((localStream) => {
      this.video1.srcObject = localStream;
      return this.peerConnection1.addStream(localStream);
    }).then(() => {
      return this.peerConnection1.createAnswer();
    }).then((answer) => {
      return this.peerConnection1.setLocalDescription(answer);
    }).then(() => {
      this.props.acceptVideoRequest(this.props.chat.incomingVideoCallFrom, this.peerConnection1.localDescription)
    });

    this.peerConnection1.onicecandidate = this.onIceCandidate;
    this.peerConnection1.onaddstream = this.onAddStream;
  }

  onIceCandidate = (event) => {
    // Send ice candidates to other user
    let recipient = this.props.chat.incomingVideoCallFrom;
    if (this.props.chat.outgoingVideoCall) {
      recipient = this.props.chat.outgoingVideoCallTo;
    }
    this.props.iceCandidateExchange(recipient, event.candidate);
  }

  onAddStream = (event) => {
    this.video2.srcObject = event.stream;
  };

  setRemoteDescription = (description) => {
    this.peerConnection1.setRemoteDescription(description).then(() => console.log('set remote desc'));
  }

  setRemoteIceCandidates = (candidate) => {
    this.peerConnection1.addIceCandidate(candidate);
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
        <video className={classes.video} ref={elem => this.video1 = elem} autoPlay></video>
        <video className={classes.video} ref={elem => this.video2 = elem} autoPlay></video>
        <button onClick={this.props.closeVideoChat}>Close</button>
      </div>
    );
  }
}

export default withStyles(styles)(VideoChat);