import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginController = new LoginController();
const loginRouter = Router();

loginRouter.post('/', loginController.toConnect);

export default loginRouter;
