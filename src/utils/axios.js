import axios from 'axios';

export const ballDontLie = axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1',
});
