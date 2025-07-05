import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // ✅ RELATIVE PATH so Vite proxy handles it
  withCredentials: true, // ✅ If you're using cookies (for JWT or session)
});

export default instance;
