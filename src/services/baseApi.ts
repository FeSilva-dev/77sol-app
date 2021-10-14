import axios from 'axios';

export const ApiService = axios.create({
  baseURL: "https://api2.77sol.com.br/"
});