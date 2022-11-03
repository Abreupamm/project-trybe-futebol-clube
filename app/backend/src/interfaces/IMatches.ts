import Matches from '../database/models/MatchesModel';

export interface IMatches extends Matches{
  teamHome?: object,
  teamAway?: object,
}

export interface INewMatches {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
