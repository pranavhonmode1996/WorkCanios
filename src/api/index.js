import axios from 'axios';
const URL = process.env.BACKEND_URL;

export const addAdminProfileDetails = (payload) => axios.get(`http://localhost:4000/adminProfile/addAdminDetails`, payload); 