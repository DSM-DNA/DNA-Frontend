import axios from 'axios';

const client = axios.create({
  baseURL: 'http://211.38.86.92:8080',
});

export default client;
