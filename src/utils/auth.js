// utils/auth.js
import cookies from 'js-cookie';

export const isAuthenticated = () => {
  const token = cookies.get('auth_token'); // ou outro nome de cookie que você esteja usando
  return !!token;
};
