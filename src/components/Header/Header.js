import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  header: {
    width: '100%',
    height: 60,
    background: '#eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    boxSizing: 'border-box'
  }
});

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: undefined,
    };
  }

  handleOpen = (e) => {
    this.setState({
      anchorEl: e.target,
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: undefined,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.header}>
          <div>
            <Typography variant='title'>Conversations</Typography>
          </div>
          <div>
            <IconButton onClick={this.handleOpen}><MoreVert /></IconButton>
            <Menu
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.props.openAddContact}>Add Contact</MenuItem>
              <MenuItem onClick={this.props.logout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);