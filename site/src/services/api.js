import axios from 'axios';

const baseURL = 'http://educacao.dadosabertosbr.com/';
const responseType = 'json';

export const api = axios.create({
  baseURL,
  responseType,
});
