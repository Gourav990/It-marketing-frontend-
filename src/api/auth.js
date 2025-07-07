import axios from 'axios';
//gourav
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // ✅ RELATIVE PATH so Vite proxy handles it
  withCredentials: true, // ✅ If you're using cookies (for JWT or session)
});

export default instance;
