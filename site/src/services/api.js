import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/'
const responseType = 'json'

export const api = axios.create({
  baseURL,
  responseType,
})
