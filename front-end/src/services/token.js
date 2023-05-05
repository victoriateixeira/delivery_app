import Jwt from 'jsonwebtoken';

export const readToken = (token) => {
  const decodedToken = Jwt.decode(token);
  const userId = decodedToken.id;
  return userId;
}
