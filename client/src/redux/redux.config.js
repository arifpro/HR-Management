import axios from 'axios';

const BASE_URL = 'http://192.168.1.106:7000';

const api = axios.create({
    baseURL: BASE_URL || 'http://localhost:7000',
});

export default api;
