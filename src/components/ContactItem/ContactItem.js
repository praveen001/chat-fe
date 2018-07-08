import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  contact: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  avatar: {
    marginRight: theme.spacing.unit * 2
  },
});

class ContactItem extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Link
        to={`/chat/${this.props.contact.email}`}
        className={classes.contact}
      >
        <ListItem button>
          <div
            className={classes.avatar}
          >
            <Avatar
              src={this.props.contact.picture}
            />
          </div>
          <div>
            <Typography>{this.props.contact.name}</Typography>
          </div>
        </ListItem>
      </Link>
    );
  }
}

export default withStyles(styles)(ContactItem);