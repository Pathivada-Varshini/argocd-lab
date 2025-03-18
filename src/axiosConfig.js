import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://springboot-app:8000/api',
});

export default axiosInstance;
