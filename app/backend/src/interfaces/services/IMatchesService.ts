import { IMatches } from '../IMatches';

export interface IMatchesService {
  getMatches(): Promise<IMatches[]>
  getMatchesIsProgress(progress: boolean): Promise<IMatches[]>
}
