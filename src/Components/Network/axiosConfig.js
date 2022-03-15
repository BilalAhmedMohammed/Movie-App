import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: "801e8bbfcf73f4e6bd852bc32bd613a6",
    },
  });
