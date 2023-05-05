import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`
});

export const requestOrders = async (endpoint, userId) => {
  const { data } = await api.get(`${endpoint}/${userId}`);

  return data
};
