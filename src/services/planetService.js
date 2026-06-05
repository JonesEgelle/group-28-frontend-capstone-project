import { PLANET_API_URL } from '../utils/constants';

export const getPlanets = async () => {
  try {
    const response = await fetch(PLANET_API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch planets');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
