import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  dialogBody: {
    padding: theme.spacing.unit * 2
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
});

class AddContact extends React.Component {
  onEmailChange = (e) => {
    this.props.onEmailChange(e.target.value);
  }

  addNewContact = () => {
    this.props.addNewContact(this.props.contacts.email);
  }

  render() {
    const { classes } = this.props,
      hasError = this.props.contacts.email.length > 0 && !this.props.contacts.emailExist,
      buttonDisabled = this.props.contacts.email.length === 0 || !this.props.contacts.emailExist;

    return (
      <Dialog
        open={this.props.contacts.opened}
        onClose={this.props.closeAddContact}
      >
        <DialogTitle>Add Contact</DialogTitle>
        
        <div
          className={classes.dialogBody}
        >
          <TextField
            label='Email'
            onChange={this.onEmailChange}
            value={this.props.contacts.email}
            helperText={hasError && 'Email is not registered'}
            error={hasError}
          />

          <Button
            color='primary'
            className={classes.button}
            disabled={buttonDisabled}
            onClick={this.addNewContact}
            variant='contained'
          >
            Add
          </Button>
        </div>
      </Dialog>
    );
  }
}
  
export default withStyles(styles)(AddContact);