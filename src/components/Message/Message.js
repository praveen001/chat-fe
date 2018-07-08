import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  notSentByMe: {
    width: '65%',
    float: 'left',
    clear: 'both',
    background: '#009688',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    '& > p': {
      color: '#fff',
    }
  },
  sentByMe: {
    width: '65%',
    float: 'right',
    clear: 'both',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    background: '#ccc',
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
      </div>
    );
  }
}

export default withStyles(styles)(Message);