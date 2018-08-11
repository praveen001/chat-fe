import axios from 'axios';

import Store from './store';
import { logout } from './actions/userActions';

const baseURL = 'https://localhost:3000/';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const state = Store.getState();
  if (state.user.isAuthenticated) {
    config.headers['authorization'] = state.user.user.token;
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
  return response;
}, (err) => {
  // if (err.response.status === 403) {
  //   Store.dispatch(logout());
  // }
  return Promise.reject(err);
});

export default instance;