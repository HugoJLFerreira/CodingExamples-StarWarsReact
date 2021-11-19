import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;
