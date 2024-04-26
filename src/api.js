import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import { config } from "localforage";

const bapi = axios.create({
    baseURL: process.env.REACT_APP_DJANGO_URL
});

bapi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default bapi;