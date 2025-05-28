// utils/token.js
import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, 'yourSecretKey', {
    expiresIn: '1h',
  });
};
