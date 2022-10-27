import { Router } from 'express';
import LoginService from '../services/loginService';
import LoginController from '../controllers/loginController';
import validEmailLogin from '../middlewares/validEmailLogin';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const router = Router();

router.post(
  '/login',
  (req, res, next) => validEmailLogin(req, res, next),
  (req, res) => loginController.toConnect(req, res),
);

export default router;
