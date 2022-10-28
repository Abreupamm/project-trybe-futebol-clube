import { Request, Response } from 'express';
import { ITeamsService } from '../interfaces/services/ITeamsService';

export default class TeamsController {
  private readonly teamsService: ITeamsService;

  constructor(teamsService: ITeamsService) {
    this.teamsService = teamsService;
  }

  async getTeams(req: Request, res: Response) {
    const All = await this.teamsService.getTeams();
    return res.status(200).json(All);
  }

  async getTeamsById(req: Request, res: Response) {
    const team = await this.teamsService.getTeamsById(req.params.id);
    return res.status(200).json(team);
  }
}
