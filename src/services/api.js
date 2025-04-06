import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const verifyEmail = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/auth/verify-email`, { token });
    return response.data;
  } catch (error) {
    console.error('Email verification error:', error);
    throw error;
  }
};

export const getDownloadUrl = () => {
  return process.env.REACT_APP_DESKTOP_APP_DOWNLOAD_URL || 'http://localhost:3001/public/downloads/time-tracker-desktop.dmg';
};

export default api;