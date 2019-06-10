export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/';
export const HEADERS = {};
export const getAuthorizationHeader = bearerKey => ({
  Authorization: `Bearer ${localStorage.getItem(bearerKey)}`,
});
