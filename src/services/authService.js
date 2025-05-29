import axios from "axios";

const BASE_URL = "http://localhost:5000/users";

// Register a new user
export const registerUser = async (userData) => {
  return axios.post(BASE_URL, userData);
};

// Login (find user by email and password)
export const loginUser = async (email, password) => {
  return axios.get(`${BASE_URL}?email=${email}&password=${password}`);
};

// Check if email already exists
export const checkEmailExists = async (email) => {
  return axios.get(`${BASE_URL}?email=${email}`);
};
