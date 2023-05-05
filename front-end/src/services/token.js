import jwt from 'jsonwebtoken';

export const readToken = (token) => {
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;
  return userId;
}