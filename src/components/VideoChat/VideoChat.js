import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {

};

// (function () {
//   navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

//   navigator.getMedia(
//     // constraints
//     { video: true, audio: false },

//     // success callback
//     function (mediaStream) {
//       var video = document.getElementsByTagName('video')[0];
//       video.src = window.URL.createObjectURL(mediaStream);
//       video.play();
//     },
//     //handle error
//     function (error) {
//       console.log(error);
//     })
// })();

class VideoChat extends React.Component {
  render() {
    const { classes } = this.props;

    if (!this.props.open) {
      return null;
    }

    return (
      <div
        className={classes.videoChatWrap}
      >
        Video Chat
      </div>
    );
  }
}

export default withStyles(styles)(VideoChat);