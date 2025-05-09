import axios from "axios";

export const apiInstanExpress = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_EXPRESS,
  headers: {
    "Content-Type": "application/json",
  },
});
