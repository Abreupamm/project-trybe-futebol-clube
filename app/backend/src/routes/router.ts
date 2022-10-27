import { Router } from 'express';
import LoginService from '../services/loginService';
import LoginController from '../controllers/loginController';
import validEmailLogin from '../middlewares/validEmailLogin';
import validPassword from '../middlewares/validPassword';
import LoginValidateController from '../controllers/LoginValidateController';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const loginValidateController = new LoginValidateController(loginService);
const router = Router();

router.post(
  '/login',
  (req, res, next) => validEmailLogin(req, res, next),
  (req, res, next) => validPassword(req, res, next),
  (req, res) => loginController.toConnect(req, res),
);

router.get('/login/validate', (req, res) => loginValidateController.valodation(req, res));

export default router;
