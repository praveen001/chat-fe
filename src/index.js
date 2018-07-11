import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Chat from './containers/Chat/Chat';
import Contacts from './containers/Contacts/Contacts';
import Home from './layouts/Home/Home';
import VideoChat from './containers/VideoChat/VideoChat';
import Login from './containers/Login/Login';
import store from './store';
import styles from './index.css';
import theme from './theme';
import Websocket from './containers/Websocket/Websocket';

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Login>
        <Websocket>
          <Contacts>
            <VideoChat />
            <BrowserRouter>
              <Switch>
                <Route path='/chat/:email' component={Chat} />
                <Route path='/' component={Home} />
              </Switch>
            </BrowserRouter>
          </Contacts>
        </Websocket>
      </Login>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);