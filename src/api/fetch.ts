import { BASE_URL } from 'src/constants/config';

export const fetchApi = (params: string) => fetch(BASE_URL + params);
