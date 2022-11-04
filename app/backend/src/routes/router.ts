import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import validEmailLogin from '../middlewares/validEmailLogin';
import validPassword from '../middlewares/validPassword';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controllers/MatchesController';
import { validTeamsName, validTeamDatabase } from '../middlewares/validTeams';
import authenticateToken from '../middlewares/validToken';
import LeaderBoardController from '../controllers/LeaderBoardController';
import LeaderBoardServices from '../services/LeaderBoardService';

const loginService = new UserService();
const loginController = new UserController(loginService);
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);
const leaderBoardService = new LeaderBoardServices();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

const router = Router();

router.post('/login', validEmailLogin, validPassword, (req, res) =>
  loginController.toConnect(req, res));

router.get('/login/validate', authenticateToken, (req, res) =>
  loginController.validation(req, res));

router.get('/teams', (req, res) => teamsController.getTeams(req, res));

router.get('/teams/:id', (req, res) => teamsController.getTeamsById(req, res));

router.get('/matches', (req, res) => matchesController.getMatches(req, res));

router.post('/matches', authenticateToken, validTeamsName, validTeamDatabase, (req, res) =>
  matchesController.newMatche(req, res));

router.patch('/matches/:id/finish', (req, res) => matchesController.matcheFinish(req, res));

router.patch('/matches/:id', (req, res) => matchesController.matchesUpdate(req, res));

router.get('/leaderboard/home', (req, res) => leaderBoardController.getLeaderBoard(req, res));

export default router;
