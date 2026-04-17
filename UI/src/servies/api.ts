import axios from "axios";
import { API_URL } from "./apivesrion";

const API = axios.create({
  baseURL: API_URL // free test API
});
console.log(API_URL);

export default API;