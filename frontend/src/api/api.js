import axios from "axios";
const BASE = import.meta.env.VITE_API;

export const login = (email, password) =>
  axios.post(`${BASE}/auth/login`, { email, password });

export const registerUser = (name, email, password) =>
  axios.post(`${BASE}/auth/register`, { name, email, password });

export const recommend = (token, location, skill) =>
  axios.post(
    `${BASE}/recommend`,
    { location, skill },
    { headers: { Authorization: "Bearer " + token } }
  );
