import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import validEmailLogin from '../middlewares/validEmailLogin';
import validPassword from '../middlewares/validPassword';
import LoginValidateController from '../controllers/LoginValidateController';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';

const loginService = new UserService();
const loginController = new UserController(loginService);
const loginValidateController = new LoginValidateController(loginService);
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);
const router = Router();

router.post(
  '/login',
  (req, res, next) => validEmailLogin(req, res, next),
  (req, res, next) => validPassword(req, res, next),
  (req, res) => loginController.toConnect(req, res),
);

router.get('/login/validate', (req, res) => loginValidateController.valodation(req, res));

router.get('/teams', (req, res) => teamsController.getTeams(req, res));

router.get('/teams/:id', (req, res) => teamsController.getTeamsById(req, res));

export default router;
