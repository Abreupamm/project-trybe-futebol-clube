import { RequestHandler } from 'express';

const validEmailLogin: RequestHandler = (req, res, next) => {
  const { email } = req.body;
  if (!email || email.length < 5) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const re = /\S+@\S+\.\S+/;
  const validation = re.test(email);
  if (!validation) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};

export default validEmailLogin;
