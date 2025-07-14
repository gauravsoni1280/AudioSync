import axios from 'axios';

const API_BASE_URL = 'http://localhost:5005/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log("Token attached to request:", token); // Debugging line
        } else {
            console.warn("No token found in localStorage.");
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
