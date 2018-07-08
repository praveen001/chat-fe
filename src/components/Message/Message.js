import React from 'react';
import moment from 'moment';

import AccessTime from '@material-ui/icons/AccessTime';
import Done from '@material-ui/icons/Done';
import DoneAll from '@material-ui/icons/DoneAll';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  notSentByMe: {
    maxWidth: '65%',
    float: 'left',
    clear: 'both',
    background: '#009688',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    '& > p': {
      color: '#fff',
    },
  },
  sentByMe: {
    maxWidth: '65%',
    float: 'right',
    clear: 'both',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    background: '#ccc',
  },
  time: {
    float: 'right',
    opacity: 0.7,
    display: 'flex',
  },
  statusIcon: {
    height: 15,
    width: 15,
  },
});

class Message extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        className={this.props.sentByMe ? classes.sentByMe : classes.notSentByMe}
      >
        <Typography>{this.props.message.message}</Typography>
        <Typography
          component='p'
          variant='caption'
          className={classes.time}
        >
          {moment(this.props.message.sent_at).format('hh:mmA')}
          {
            this.props.sentByMe && !this.props.message.sent && <AccessTime className={classes.statusIcon} />
          }
          {
            this.props.sentByMe && this.props.message.sent && !this.props.message.received && <Done className={classes.statusIcon} />
          }
          {
            this.props.sentByMe && this.props.message.sent && this.props.message.received && <DoneAll className={classes.statusIcon} />
          }
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Message);