import { BASE_URL } from 'src/constants/config';

export const fetchApi = async <T>(params: string, init?: RequestInit) => {
  const response = await fetch(BASE_URL + params, init);

  if (!response.ok) throw Error(response.statusText);

  const objectT: T = await response.json();

  return objectT;
};
