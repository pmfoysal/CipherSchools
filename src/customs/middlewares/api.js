import axios from 'axios';

const api = axios.create({
   baseURL: 'https://pmsvidplay.onrender.com/api/v1',
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
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
         window.location.pathname = '/signin';
      }
      return Promise.reject(error.response.data || error);
   }
);

export default api;
