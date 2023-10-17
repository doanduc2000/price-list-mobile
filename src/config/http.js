import axios from 'axios';

const http = axios.create({
  baseURL: 'http://10.196.60.95/project/price-list-be/public/api/',
  // baseURL: 'https://scigroup.com.vn/app/price-list/be/public/api/',
  headers: {
    'Content-Type': 'Application/json',
  },
});
export default http;
