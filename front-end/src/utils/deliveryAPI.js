import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestAPI = async (endpoint) => {
  const { data } = await api.get(`${endpoint}`);
  console.log(data);
  return data;
};

export const login = async (endpoint, body) => {
  const data = await api.post(`${endpoint}`, body);

  return data;
};
