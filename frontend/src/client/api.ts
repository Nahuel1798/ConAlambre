import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5120',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agregar automáticamente el token
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Cargar token al iniciar la app
const token = localStorage.getItem("token");

if (token) {
  setAuthToken(token);
}