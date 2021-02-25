import axios from 'axios';

const client = axios.create({
  baseURL: 'http://121.66.14.43:9191',
});

export default client;
