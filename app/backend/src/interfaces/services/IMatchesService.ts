import { IMatches } from '../IMatches';

export interface IMatchesService {
  getMatches(): Promise<IMatches[]>
}
