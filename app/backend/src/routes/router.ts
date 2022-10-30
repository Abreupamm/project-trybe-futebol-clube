import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import validEmailLogin from '../middlewares/validEmailLogin';
import validPassword from '../middlewares/validPassword';
import LoginValidateController from '../controllers/LoginValidateController';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';

const loginService = new UserService();
const loginController = new UserController(loginService);
const loginValidateController = new LoginValidateController(loginService);
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

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

router.get('/matches', (req, res) => matchesController.getMatches(req, res));

export default router;
