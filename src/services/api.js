import axios from 'axios';

axios.create({
  baseURL: 'https://globohub.monts.com.br/api',
});

export default axios;
