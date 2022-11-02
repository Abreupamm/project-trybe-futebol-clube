import { verify } from 'jsonwebtoken';
import { RequestHandler } from 'express';

const jwtSecretKey = process.env.JWT_SECRET;

const authenticateToken: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  const user = verify(authorization, jwtSecretKey as string);

  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default authenticateToken;
