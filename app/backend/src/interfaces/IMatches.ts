export interface IMatches {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome?: object,
  teamAway?: object,
}

export interface INewMatches {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
