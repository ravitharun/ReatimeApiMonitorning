import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // free test API
});

export default API;