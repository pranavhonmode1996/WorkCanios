import axios from 'axios';
const URL = process.env.BACKEND_URL;

export const addAdminProfileDetails = (payload) => axios.post(`http://localhost:4000/adminProfile/addAdminDetails`, payload);
export const userSignup = (payload) => axios.post(`http://localhost:4000/user/signup`, payload); 