import { ApolloServer } from 'apollo-server';
import { gql } from 'apollo-server-express';

import { readFileSync } from 'fs';
import { playersMock, teamsMock, currentRoundMock, tournamentsMock } from './mocks/mocks';

import {
  Resolvers,
  MutationStartTournamentArgs,
  MutationUpdateGameArgs,
  MutationNextRoundArgs,
  QueryPlayersArgs,
  QueryTournamentsArgs,
  MutationCreatePlayerArgs,
  MutationCreateTeamArgs
} from './gql/resolvers-types.generated';
import { countries } from './model/countryCodes';

const grapqhlSchema = readFileSync('./src/schema.graphql').toString();

const typeDefs = gql`
  ${grapqhlSchema}
`;

const resolvers: Resolvers = {
  Query: {
    countryCodes: () => countries,
    players: (root: any, args: QueryPlayersArgs, context: any) => {
      let filteredPlayers = args.nationality ? playersMock.filter((player) => player.nationality === args.nationality) : playersMock;
      if (args.ageFrom) {
        filteredPlayers = filteredPlayers.filter((player) => (args.ageFrom ? player.age >= args.ageFrom : true));
      }
      if (args.ageTo) {
        filteredPlayers = filteredPlayers.filter((player) => (args.ageTo ? player.age <= args.ageTo : true));
      }
      return filteredPlayers;
    },
    teams: () => teamsMock,
    tournaments: (root: any, args: QueryTournamentsArgs, context: any) => {
      if (args.tournamentId) {
        return tournamentsMock.filter((tournament) => tournament.id === args.tournamentId);
      } else {
        return tournamentsMock;
      }
    },
    currentRound: () => currentRoundMock,
    isTournamentFinished: () => false
  },
  Mutation: {
    createPlayer: (root: any, args: MutationCreatePlayerArgs, context: any) => '999',
    createTeam: (root: any, args: MutationCreateTeamArgs, context: any) => '999',
    startTournament: (root: any, args: MutationStartTournamentArgs, context: any) => '1',
    nextRound: (root: any, args: MutationNextRoundArgs, context: any) => '2',
    updateGame: (root: any, args: MutationUpdateGameArgs, context: any) => '1'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4444 }).then(async ({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
