import axios from 'axios';
import api from './apiService';

export const addAdminProfileDetails = (payload) => api.post(`/adminProfile/addAdminDetails`, payload);
export const userSignup = (payload) => api.post(`/user/signup`, payload); 