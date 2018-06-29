import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './layouts/home';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);