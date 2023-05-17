import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const requestAPI = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

const postAPI = async (endpoint, obj) => {
  const { data } = await api.post(endpoint, obj);
  return data;
};

const updateAPI = async (endpoint, obj) => {
  const { data } = await api.put(endpoint, obj);
  return data;
};

const deleteAPI = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export { requestAPI, postAPI, updateAPI, deleteAPI };
