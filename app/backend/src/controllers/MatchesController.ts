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
}
