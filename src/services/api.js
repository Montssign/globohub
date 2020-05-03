import axios from 'axios';

axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axios;
