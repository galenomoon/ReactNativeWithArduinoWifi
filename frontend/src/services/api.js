import axios from 'axios';

const api_client = axios.create({
  baseURL: 'http://10.0.0.106'
})

export default api_client;