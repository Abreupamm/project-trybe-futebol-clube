import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/services/IMatchesService';

export default class MatchesController {
  private readonly matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    let matchesAll;
    if (!inProgress) {
      matchesAll = await this.matchesService.getMatches();
    } else {
      const progress = Boolean(inProgress === 'true');
      matchesAll = await this.matchesService.getMatchesIsProgress(progress);
    }
    return res.status(200).json(matchesAll);
  }

  async newMatche(req: Request, res: Response) {
    const newMatche = await this.matchesService.newMatche(req.body);
    return res.status(200).json(newMatche);
  }

  async matcheFinish(req: Request, res: Response) {
    const { id } = req.params;
    const matcheId = parseFloat(id);
    const finish = await this.matchesService.matcheFinish(matcheId);
    return res.status(200).json(finish);
  }

  async matchesUpdate(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const idMatche = parseFloat(id);
    await this.matchesService.matchesUpdate(idMatche, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({});
  }
}
