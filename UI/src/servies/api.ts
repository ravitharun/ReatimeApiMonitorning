import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api", // free test API
});

export default API;