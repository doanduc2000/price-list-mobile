import axios from "axios";

const http = axios.create({
  // baseURL: 'http://localhost/project/price-list-be/public/api/',
  baseURL: "https://scigroup.com.vn/app/price-list/be/public/api/",
  headers: {
    "Content-Type": "Application/json"
  }
});
export default http;
