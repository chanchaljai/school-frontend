import axios from "axios";

const api = axios.create({
  baseURL: "https://school-backend-1z09.onrender.com/api",
});

export default api;