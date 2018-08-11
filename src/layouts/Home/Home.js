import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import AddContact from '../../containers/AddContact/AddContact';
import ContactList from '../../containers/ContactList/ContactList';
import Header from '../../containers/Header/Header';
import VideoChat from '../../containers/VideoChat/VideoChat';

const styles = {
  conversationsWrap: {
    position: 'fixed',
    height: '96%',
    top: '2%',
    width: '90%',
    left: '5%',
    display: 'flex',
    flexDirection: 'column',
  },
};

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper
        className={classes.conversationsWrap}
      >
        <Header />
        <ContactList />
        <AddContact />
        <VideoChat />
      </Paper>
    );
  }
}

export default withStyles(styles)(Home);