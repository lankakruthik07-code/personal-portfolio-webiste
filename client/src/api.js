import axios from "axios";

const API = axios.create({
  baseURL: "https://personal-portfolio-webiste.onrender.com/api",
});

export default API;