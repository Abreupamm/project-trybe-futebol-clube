import { ITeams } from '../interfaces/ITeams';
import Teams from '../database/models/TeamsModel';
import NotauthorizedError from '../errors/NotauthorizedError';

export default class TeamsService {
  getTeams = async (): Promise<ITeams[]> => {
    const teamsAll = await Teams.findAll();

    return teamsAll;
  };

  getTeamsById = async (idTeam: string): Promise<ITeams> => {
    const idNumber = parseFloat(idTeam);
    const teamById = await Teams.findOne({ where: { id: idNumber } });
    if (!teamById) {
      throw new NotauthorizedError('');
    }
    return teamById;
  };
}
