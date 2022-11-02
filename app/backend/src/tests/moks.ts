export const userAdminToken = {
  id: 1,
  username: 'Maria',
  role: 'admin',
  email: 'maria@email.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

export const teams = [
  {
    id: 1,
    teamName: 'Avaí/Kindermann',
  },
  {
    id: 2,
    teamName: 'Bahia',
  },
  {
    id: 3,
    teamName: 'Botafogo',
  },
];

export const teamById = {
  id: 1,
  teamName: 'Avaí/Kindermann',
};

export const newMatches = {
  id: 1,
  homeTeam: 16,
  homeTeamGoals: 2,
  awayTeam: 8,
  awayTeamGoals: 2,
  inProgress: true,
};

export const createMatches = {
  homeTeam: 16,
  awayTeam: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
};

export const matchesAll = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'São Paulo',
    },
    teamAway: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'São Paulo',
    },
    teamAway: {
      teamName: 'Internacional',
    },
  },
];


export const matchesInProgressTrue = [
  {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "São Paulo"
    },
    teamAway: {
      teamName: "Internacional"
    }
  },
  {
    id: 42,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 1,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: "Ferroviária"
    },
    teamAway: {
      teamName: "Avaí/Kindermann"
    }
  }
];

export const matchesInProgressFalse = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São Paulo"
    },
    teamAway: {
      teamName: "Grêmio"
    }
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "Internacional"
    },
    teamAway: {
      teamName: "Santos"
    }
  }
]