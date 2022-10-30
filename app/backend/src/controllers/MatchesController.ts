import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/services/IMatchesService';

export default class MatchesController {
  private readonly matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    console.log(req.query);
    let matchesAll;
    if (inProgress) {
      matchesAll = await this.matchesService.getMatchesIsProgress();
    } else {
      matchesAll = await this.matchesService.getMatches();
    }
    return res.status(200).json(matchesAll);
  }
}
