import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/services/IMatchesService';

export default class MatchesController {
  private readonly matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  async getMatches(req: Request, res: Response) {
    const All = await this.matchesService.getMatches();
    return res.status(200).json(All);
  }
}
