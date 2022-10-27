import { Router } from 'express';
import LoginService from '../services/loginService';
import LoginController from '../controllers/loginController';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const router = Router();

router.post('/login', (req, res) => loginController.toConnect(req, res));

export default router;
