import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-manager-api-01eg.onrender.com",
});
