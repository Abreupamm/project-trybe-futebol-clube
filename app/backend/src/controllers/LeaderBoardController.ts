import { Request, Response } from 'express';
import { ILeaderBoardService } from '../interfaces/services/ILeardBoardService';

class LeaderBoardController {
  private readonly leaderBoardService: ILeaderBoardService;

  constructor(leaderBoardService: ILeaderBoardService) {
    this.leaderBoardService = leaderBoardService;
  }

  getLeaderBoard = async (req: Request, res: Response) => {
    const leaderBoard = await this.leaderBoardService.getLeaderBoard();
    return res.status(200).json(leaderBoard);
  };
}

export default LeaderBoardController;
