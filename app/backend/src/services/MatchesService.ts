import { IMatches, INewMatches } from '../interfaces/IMatches';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

export default class MatchesService {
  getMatches = async (): Promise<IMatches[]> => {
    const matchesAll = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matchesAll;
  };

  newMatche = async (matches: INewMatches): Promise<IMatches> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = matches;

    const newMatche = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return newMatche;
  };

  getMatchesIsProgress = async (progress: boolean): Promise<IMatches[]> => {
    const matches = await Matches.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  matcheFinish = async (id: number): Promise<object> => {
    await Matches.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  };

  matchesUpdate = async (
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<void> => {
    await Matches.update({ awayTeamGoals, homeTeamGoals }, { where: { id } });
  };
}
