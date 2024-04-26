import axios from 'axios';

const adverts = axios.create({
  baseURL: 'https://66184bd69a41b1b3dfbcb9ce.mockapi.io/api',
  params: {},
});

adverts.interceptors.request.use(config => {
  config.params = {
    ...config.params,
  };
  return config;
});

export const getAdverts = async params => {
  const { data } = await adverts.get('/adverts', {
    params,
  });
  return data;
};
