import React from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Message from '../Message/Message';
import Paper from '@material-ui/core/Paper';
import Send from '@material-ui/icons/Send';
import TagFaces from '@material-ui/icons/TagFaces';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VideoCall from '@material-ui/icons/VideoCall';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chatWrap: {
    position: 'fixed',
    height: '96%',
    top: '2%',
    width: '90%',
    left: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    width: '100%',
    height: 60,
    background: '#eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    boxSizing: 'border-box',
  },
  chatHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  recipientName: {
    fontSize: 18,
    marginLeft: theme.spacing.unit
  },
  chatBody: {
    diplay: 'flex',
    flex: 1,
    overflow: 'auto',
  },
  chatFooter: {
    height: 60,
    background: '#eee',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textbox: {
    flex: 1,
  },
});

class Chat extends React.Component {
  componentDidMount() {
    this.recipient = this.props.contact.email;
    this.props.loadMessages(this.recipient);
  }

  onMessageChange = (e) => {
    this.props.messageChange(e.target.value);
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  sendMessage = () => {
    if (!this.props.chat.message) {
      return;
    }
    this.props.sendMessage({
      type: 'chatMessage',
      to: this.recipient,
      message: this.props.chat.message,
    });
  }

  openVideoChat = () => {
    this.props.openVideoChat(this.recipient);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper
        className={classes.chatWrap}
      >
        <div
          className={classes.chatHeader}
        >
          <div className={classes.chatHeaderLeft}>
            <Link
              to='/'
            >
              <IconButton>
                <KeyboardArrowLeft />
              </IconButton>
            </Link>
            <Avatar
              src={this.props.contact.picture}
            />
            <Typography
              className={classes.recipientName}
            >
              {this.props.contact.name}
            </Typography>
          </div>
          <div>
            <IconButton
              onClick={this.openVideoChat}
            >
              <VideoCall
                recipient={this.props.contact.email}
              />
            </IconButton>
          </div>
        </div>
        
        <div
          className={classes.chatBody}
        >
          {
            (this.props.chat.conversations[this.recipient] || []).map(messageId => {
              const message = this.props.chat.messages[messageId];
              return (
                <Message
                  message={message}
                  sentByMe={message.to === this.recipient}
                  key={messageId}
                />
              )
            })
          }
        </div>

        <div
          className={classes.chatFooter}
        >
          <TextField
            onChange={this.onMessageChange}
            onKeyPress={this.onKeyPress}
            value={this.props.chat.message}
            className={classes.textbox}
          />
          <IconButton>
            <TagFaces />
          </IconButton>
          <IconButton
            onClick={this.sendMessage}
          >
            <Send />
          </IconButton>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Chat);