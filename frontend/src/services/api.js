import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
});

API.interceptors.request.use((config) => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const loginApi = (data) => API.post('/auth/login', data);
export const registerApi = (data) => API.post('/auth/register', data);
export const getMeApi = () => API.get('/auth/me');

export const getUsersApi = () => API.get('/users');
export const getUserByIdApi = (id) => API.get(`/users/${id}`);
export const createUserApi = (data) => API.post('/users', data);
export const updateUserApi = (id, data) => API.patch(`/users/${id}`, data);
export const deleteUserApi = (id) => API.delete(`/users/${id}`);

export const getProductsApi = () => API.get('/products');
export const getProductByIdApi = (id) => API.get(`/products/${id}`);
export const createProductApi = (data) => API.post('/products', data);
export const updateProductApi = (id, data) => API.patch(`/products/${id}`, data);
export const deleteProductApi = (id) => API.delete(`/products/${id}`);

export const getSchoolsApi = () => API.get('/schools');
export const getSchoolByIdApi = (id) => API.get(`/schools/${id}`);
export const createSchoolApi = (data) => API.post('/schools', data);
export const updateSchoolApi = (id, data) => API.patch(`/schools/${id}`, data);
export const deleteSchoolApi = (id) => API.delete(`/schools/${id}`);

export default API;
