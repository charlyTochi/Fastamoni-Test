import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from '../services/api';
import {API_ENDPOINT} from '../core/constants';

export function signupUser(
  dispatch: Dispatch,
  data: {
    firstName: string;
    lastName: String;
    email: string;
    password: string;
  },
) {
  dispatch({type: 'AUTH_LOADING'});

  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
  };

  API.post('/users', payload)
    .then(async res => {
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: res.data,
      });

      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: res.data,
      });

      const token = await AsyncStorage.setItem(
        'token',
        res.data.createdAt + 'sydaiofuds',
      );
      return res.data;
    })
    .catch(err => {
      console.log('resss', err?.response);
      dispatch({
        type: 'AUTH_ERROR',
        payload: err?.response?.data,
      });
    });
}

export function loginUser(
  dispatch: Dispatch,
  data: {email: string; password: string},
) {
  dispatch({type: 'AUTH_LOADING'});

  const payload = {
    username: data.email,
    password: data.password,
  };
  getUserById(3, dispatch);

  API.post('/login', payload)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then(async res => {})
    .catch(err => {
      console.log('error', err);

      dispatch({
        type: 'AUTH_ERROR',
        payload: err?.response?.data,
      });
    });
}

export const getUserById = async (userId: any, dispatch: Dispatch) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    dispatch({
      type: 'GET_USER_SUCCESS',
      payload: data.data,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export function updateUser(
  dispatch: Dispatch,
  data: {
    first_name: string;
    last_name: string;
    email: string;
  },
) {
  dispatch({type: 'AUTH_LOADING'});

  const userId = 3;
  getUserById(3, dispatch);

  API.patch(`/users/${userId}`, data)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then(res => {})
    .catch(err => {
      console.log(err);

      dispatch({
        type: 'AUTH_ERROR',
        payload: err?.response?.data,
      });
    });
}

export async function logoutUser(dispatch: Dispatch) {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'LOG_OUT'});
}
