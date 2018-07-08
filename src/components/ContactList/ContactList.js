import React from 'react';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import ContactItem from '../ContactItem/ContactItem';

const styles = {
  contactList: {
    overflow: 'auto',
  }
};

class ContactList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.contactList}
      >
        <List>
          {
            this.props.contacts.contactIds.map((contactId) => {
              return (
                <ContactItem
                  contact={this.props.contacts.contacts[contactId]}
                  key={contactId}
                />
              )
            })
          }
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ContactList);