import axios from "axios";
const isProduction = process.env.NODE_ENV === 'production'

export const axiosInstance = axios.create({
    baseURL: isProduction ? process.env.PRODUCTION_URL : process.env.DEVELOPMENT_URL
});