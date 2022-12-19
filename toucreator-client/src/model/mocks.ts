import { IRoundProps } from 'react-brackets';

export const PLAYERS_MOCK = [
  { id: '1', name: 'Jack Daniels' },
  { id: '2', name: 'Jim Beam' },
  { id: '3', name: 'Johnny Walker' },
  { id: '4', name: 'John Jameson' },
  { id: '5', name: 'Pan Tadeusz' },
  { id: '6', name: 'Jacek Soplica' },
  { id: '7', name: 'Józef Baczewski' },
  { id: '8', name: 'Fryderyk Chopin' }
];

export const TEAMS_MOCK = [
  { id: '1', name: 'Team A', players: [PLAYERS_MOCK[0]], wins: 0, losses: 0 },
  { id: '2', name: 'Team B', players: [PLAYERS_MOCK[1]], wins: 0, losses: 0 },
  { id: '3', name: 'Team C', players: [PLAYERS_MOCK[2]], wins: 0, losses: 0 },
  { id: '4', name: 'Team D', players: [PLAYERS_MOCK[3]], wins: 0, losses: 0 },
  { id: '5', name: 'Team E', players: [PLAYERS_MOCK[4]], wins: 0, losses: 0 },
  { id: '6', name: 'Team F', players: [PLAYERS_MOCK[5]], wins: 0, losses: 0 },
  { id: '7', name: 'Team G', players: [PLAYERS_MOCK[6]], wins: 0, losses: 0 },
  { id: '8', name: 'Team H', players: [PLAYERS_MOCK[7]], wins: 0, losses: 0 }
];

export const ROUNDS_MOCK: IRoundProps[] = [
  {
    title: 'Round 1',
    seeds: [
      {},
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [
          { id: 1, name: 'The Leons', score: 2 }
          // { id: 3, name: 'Kitties', score: 6 },
        ]
      },
      {},
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [
          { id: 1, name: 'The Leons', score: 2 }
          // { id: 3, name: 'Kitties', score: 6 },
        ]
      }
    ]
  },
  {
    title: 'Round 2',
    seeds: [...new Array(2)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 3, name: 'Kitties', score: 6 }
      ]
    })
  },
  {
    title: 'Round 3',
    seeds: [...new Array(1)].fill({
      id: 1,
      date: new Date().toDateString(),
      teams: [
        { id: 1, name: 'The Leons', score: 2 },
        { id: 3, name: 'Kitties', score: 6 }
      ]
    })
  }
];
