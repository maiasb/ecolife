import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000';
const responseType = 'json';

const api = axios.create({
  baseURL,
  responseType,
});

export default api;
