import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", //my backend url
});

//  Interceptor to add token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
