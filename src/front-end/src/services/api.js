import axios from 'axios';

const baseURL = process.env.BASEURL || "http://localhost:3001";

const api = axios.create({
	headers: { Authorization: sessionStorage.getItem("token") },
	baseURL: baseURL,
});
export default api;