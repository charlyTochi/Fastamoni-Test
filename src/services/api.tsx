import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_ENDPOINT} from '../core/constants';

const instance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

instance.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('token');
  console.log(config.url, config.method, config.data, token);
  // console.log('token', token);
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }

  return config;
});

export default instance;
