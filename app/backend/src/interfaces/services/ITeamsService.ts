import { ITeams } from '../ITeams';

export interface ITeamsService {
  getTeams(): Promise<ITeams[]>,
  getTeamsById(idTeam: string): Promise<ITeams>,
}
