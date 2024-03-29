import axios from "axios";

const isDevelopment = process.env.NODE_ENV === 'development'

export const axiosInstance = axios.create({
    baseURL: isDevelopment ? 'http://localhost:1337/api/' : 'http://localhost:1337/api/'
});

