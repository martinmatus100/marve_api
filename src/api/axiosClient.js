import axios from "axios";
import apiConfig from "./apiConfig";
import $ from 'jquery';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        ts: apiConfig.ts,
        apikey: apiConfig.apiKey,
        hash: apiConfig.hash
    },
    paramsSerializer: params => $.param(params)
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;