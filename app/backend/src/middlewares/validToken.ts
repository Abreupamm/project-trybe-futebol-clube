import { JwtPayload, Secret, verify } from 'jsonwebtoken';
import { RequestHandler } from 'express';

const jwtSecretKey = process.env.JWT_SECRET;

const authenticate = (token: string): JwtPayload => {
  const user = verify(token, jwtSecretKey as Secret);
  return user as JwtPayload;
};

const authenticateToken: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  const user = authenticate(authorization);

  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  req.headers.userId = user.id;
  next();
};

export default authenticateToken;
