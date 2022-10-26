import { Router } from 'express';
import LoginController from '../controller/LoginController';
const loginController = new LoginController();
const loginRouter = Router();

loginRouter.post('/', loginController);

export default { loginRouter };
