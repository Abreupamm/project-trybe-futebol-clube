import { RequestHandler } from 'express';
import TeamsService from '../services/TeamsService';

const teamsService = new TeamsService();

export const validTeamsName: RequestHandler = (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  next();
};

export const validTeamDatabase: RequestHandler = async (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;

  const teams = await teamsService.getTeams();

  const isTeams = teams.filter((team) => homeTeam === team.id || awayTeam === team.id);

  if (isTeams.length !== 2) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};
