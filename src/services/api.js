import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fca67d4795e0c65b14547cdbf507e778",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
