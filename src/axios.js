import axios from 'axios';

const baseUrl = 'http://localhost/api/';

const instance = axios.create({
  baseUrl,
});

instance.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((response) => {
  return response;
}, (err) => {
  return Promise.reject(err);
});

export default instance;