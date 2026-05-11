import axios from "axios";

const api = axios.create({
  baseURL: "https://school-backend-ykt1.onrender.com/api",
});

export default api;