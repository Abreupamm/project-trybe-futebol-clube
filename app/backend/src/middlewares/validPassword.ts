import { RequestHandler } from 'express';

const validPassword: RequestHandler = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length <= 6) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};

export default validPassword;
