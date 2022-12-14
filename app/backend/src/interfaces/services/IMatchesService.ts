import { IMatches, INewMatches } from '../IMatches';

export interface IMatchesService {
  getMatches(): Promise<IMatches[]>
  getMatchesIsProgress(progress: boolean): Promise<IMatches[]>
  newMatche(matches: INewMatches): Promise<IMatches>
  matcheFinish(id: number): Promise<object>
  matchesUpdate(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>
}
