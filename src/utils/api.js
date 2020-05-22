import axios from 'axios';

const baseUrl = 'https://api.magicthegathering.io/v1/cards';

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default () => {
  return axiosInstance.get();
}
