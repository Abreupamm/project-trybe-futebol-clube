import { IMatches, INewMatches } from '../IMatches';

export interface IMatchesService {
  getMatches(): Promise<IMatches[]>
  getMatchesIsProgress(progress: boolean): Promise<IMatches[]>
  newMatche(matches: INewMatches): Promise<IMatches>
}
