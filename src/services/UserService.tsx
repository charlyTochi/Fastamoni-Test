import {API_ENDPOINT} from '../core/constants';

export const getUserById = async (userId: any) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

