import { IMatches } from '../interfaces/IMatches';
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

  getMatchesIsProgress = async (): Promise<IMatches[]> => {
    const matches = await Matches.findAll({
      where: { inProgress: true },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };
}
