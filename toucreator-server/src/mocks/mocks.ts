import { Round, Player, Tournament, Team, TournamentStatus } from '../gql/resolvers-types.generated';

export const playersMock: Player[] = [
  { id: '1', firstName: 'Jack', lastName: 'Daniels', nationality: 'US', age: 50 },
  { id: '2', firstName: 'Jim', lastName: 'Beam', nationality: 'US', age: 48 },
  { id: '3', firstName: 'Johnny', lastName: 'Walker', nationality: 'US', age: 46 },
  { id: '4', firstName: 'John', lastName: 'Jameson', nationality: 'US', age: 30 },
  { id: '5', firstName: 'Pan', lastName: 'Tadeusz', nationality: 'PL', age: 80 },
  { id: '6', firstName: 'Jacek', lastName: 'Soplica', nationality: 'PL', age: 35 },
  { id: '7', firstName: 'Józef', lastName: 'Baczewski', nationality: 'PL', age: 30 },
  { id: '8', firstName: 'Fryderyk', lastName: 'Chopin', nationality: 'PL', age: 60 }
];

export const teamsMock: Team[] = [
  { id: '1', name: 'Team A', players: [playersMock[0]], wins: 0, losses: 0 },
  { id: '2', name: 'Team B', players: [playersMock[1]], wins: 0, losses: 0 },
  { id: '3', name: 'Team C', players: [playersMock[2]], wins: 0, losses: 0 },
  { id: '4', name: 'Team D', players: [playersMock[3]], wins: 0, losses: 0 },
  { id: '5', name: 'Team E', players: [playersMock[4]], wins: 0, losses: 0 },
  { id: '6', name: 'Team F', players: [playersMock[5]], wins: 0, losses: 0 },
  { id: '7', name: 'Team G', players: [playersMock[6]], wins: 0, losses: 0 },
  { id: '8', name: 'Team H', players: [playersMock[7]], wins: 0, losses: 0 }
];

export const roundsMock: Round[] = [
  {
    id: '1',
    name: 'Round 1',
    games: [
      { id: '1', datetime: '', teams: [], result: [0, 0], winner: null },
      { id: '2', datetime: '', teams: [], result: [0, 0], winner: null }
    ]
  },
  {
    id: '2',
    name: 'Round 2',
    games: []
  }
];

export const currentRoundMock = roundsMock[0];

export const tournamentsMock: Tournament[] = [
  {
    id: '1',
    name: 'Great Tournament',
    startDate: new Date('2022-12-01').toISOString(),
    endDate: new Date('2022-12-31').toISOString(),
    status: TournamentStatus.InProgress,
    currentRound: '1',
    rounds: roundsMock,
    players: playersMock
  },
  {
    id: '2',
    name: 'Another Tournament',
    startDate: new Date('2023-01-01').toISOString(),
    endDate: new Date('2023-01-31').toISOString(),
    status: TournamentStatus.NotStarted,
    currentRound: '1',
    rounds: roundsMock,
    players: playersMock
  }
];
