import axios from 'axios';

const studentsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { studentsApi };
