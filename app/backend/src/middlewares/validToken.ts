import { verify } from 'jsonwebtoken';
import { RequestHandler } from 'express';
import UnauthorizedError from '../errors/UnauthorizedError';

const jwtSecretKey = process.env.JWT_SECRET;

const authenticateToken: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError('token inválido');

  verify(authorization, jwtSecretKey as string);

  // if (!user) {
  //   return res.status(401).json({ message: 'token inválido' });
  // }

  next();
};

export default authenticateToken;
