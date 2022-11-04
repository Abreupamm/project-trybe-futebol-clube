import queryLeaderBoard from '../helprs/queryLeaderBoard';
import models from '../database/models';
// import { ILeaderBoard } from '../interfaces/ILeaderdBoard';

class LeaderBoardServices {
  getLeaderBoard = async (): Promise<unknown[]> => {
    const [leaderBoard] = await models.query(queryLeaderBoard);
    return leaderBoard;
  };
}

export default LeaderBoardServices;
