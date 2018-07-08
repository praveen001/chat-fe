import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  loginPaper: {
    position: 'absolute',
    height: '50%',
    width: 600,
    top: '25%',
    left: '50%',
    marginLeft: -300
  },
  loginPaperContent: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%'
  },
  logo: {
    height: 200,
    width: 200
  },
  title: {
    fontSize: 28,
    fontWeight: 100
  },
  loginOptions: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8F8',
    width: '100%'
  },
  signIn: {
    fontSize: 22,
    fontWeight: 100
  },
  googleSignIn: {
    margin: '15px 0',
    backgroundColor: '#FFF',
    margin: 5
  },
  googleLogo: {
    width: 25,
    height: 25,
    marginRight: 10,
    background: '#fff',
    borderRadius: 100,
    padding: 5
  }
});

class Login extends React.Component {
  componentWillReceiveProps() {
    console.log('login props change');
  }

  componentDidMount() {
    this.init();
  }

  init() {
    let self = this;
    var startApp = function () {
      gapi.load('auth2', function () {
        self.auth2 = gapi.auth2.init({
          client_id: '151756860734-ukvqf7thjuo7h6os3lr7vefihjd7mda5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        });
        self.attachSignin(document.getElementById('customBtn'));
      });
    };
    startApp();
    this.checkSignedInUser();
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      let id_token = googleUser.getAuthResponse().id_token;
      this.props.loginGoogleUser(id_token);
    });
  }

  checkSignedInUser() {
    const userObject = localStorage.getItem('userObject');
    if (userObject) {
      this.props.loggedInUser(JSON.parse(userObject), false);
    }
  }

  render() {
    let { classes } = this.props;

    if (this.props.isAuthenticated) {
      return this.props.children;
    }

    return (
      <Paper
        classes={{ root: classes.loginPaper }}
      >
        <div className={classes.loginPaperContent}>
          <div className={classes.logoContainer}>
            <img src={require('../../static/images/logo.png')} className={classes.logo} />
            <Typography className={classes.title}>ChatsApp</Typography>
          </div>
          <div className={classes.loginOptions}>
            <Typography className={classes.signIn}>To continue</Typography>
            <div>
              <Button variant='raised' id='customBtn' className={classes.googleSignIn}><img src={require('../../static/images/google-logo.png')} className={classes.googleLogo} />Login with Google</Button>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);