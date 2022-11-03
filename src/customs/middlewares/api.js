import axios from 'axios';

const api = axios.create({
   baseURL: 'http://localhost:5000/api/v1',
});

api.interceptors.request.use(
   function (config) {
      if (!config?.headers?.authorization) {
         config.headers.authorization = `Bearer ${window.localStorage.getItem('userToken')}`;
      }
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

api.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      return Promise.reject(error.response.data || error);
   }
);

export default api;
