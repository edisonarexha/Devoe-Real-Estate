import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 5 * 1000,
  headers,
});

export default axiosInstance;
