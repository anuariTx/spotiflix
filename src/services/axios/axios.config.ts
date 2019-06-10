export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/';
export const BEARER_KEY = process.env.REACT_APP_BEARER_KEY || '';

export const HEADERS = {};

export const getAuthorizationHeader = (bearerKey: string): object => ({
  Authorization: `Bearer ${localStorage.getItem(bearerKey)}`,
});
