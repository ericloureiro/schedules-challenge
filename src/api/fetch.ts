import { BASE_URL } from 'src/constants/config';

export const fetchApi = async <T>(params: string) => {
  const response = await fetch(BASE_URL + params);

  const objectT: T = await response.json();

  return objectT;
};
