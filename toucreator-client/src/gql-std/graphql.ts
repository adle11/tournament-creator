/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CountryInfo = {
  __typename?: 'CountryInfo';
  alpha_2_code?: Maybe<Scalars['String']>;
  alpha_3_code?: Maybe<Scalars['String']>;
  en_short_name?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  num_code?: Maybe<Scalars['String']>;
};

export type Game = {
  __typename?: 'Game';
  datetime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  result?: Maybe<Array<Scalars['Int']>>;
  teams?: Maybe<Array<Team>>;
  winner?: Maybe<Team>;
};

export type InputGameUpdate = {
  gamesId: Scalars['String'];
  result: Array<Scalars['Int']>;
};

export type InputPlayer = {
  name: Scalars['String'];
};

export type InputTeam = {
  name: Scalars['String'];
  players: Array<InputPlayer>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlayer?: Maybe<Scalars['String']>;
  createTeam?: Maybe<Scalars['String']>;
  nextRound?: Maybe<Scalars['String']>;
  startTournament?: Maybe<Scalars['String']>;
  updateGame?: Maybe<Scalars['String']>;
};


export type MutationCreatePlayerArgs = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'];
  players: Array<Scalars['String']>;
};


export type MutationNextRoundArgs = {
  tournamentId: Scalars['String'];
};


export type MutationStartTournamentArgs = {
  input: TournamentStartInput;
};


export type MutationUpdateGameArgs = {
  input: InputGameUpdate;
  tournamentId: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  countryCodes: Array<CountryInfo>;
  currentRound?: Maybe<Round>;
  isTournamentFinished?: Maybe<Scalars['Boolean']>;
  players?: Maybe<Array<Player>>;
  teams?: Maybe<Array<Team>>;
  tournaments?: Maybe<Array<Maybe<Tournament>>>;
};


export type QueryCurrentRoundArgs = {
  tournamentId: Scalars['String'];
};


export type QueryIsTournamentFinishedArgs = {
  torunamentId: Scalars['String'];
};


export type QueryPlayersArgs = {
  ageFrom?: InputMaybe<Scalars['Int']>;
  ageTo?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
};


export type QueryTournamentsArgs = {
  tournamentId?: InputMaybe<Scalars['String']>;
};

export type Round = {
  __typename?: 'Round';
  games?: Maybe<Array<Game>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  losses?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  players?: Maybe<Array<Player>>;
  wins?: Maybe<Scalars['Int']>;
};

export type Tournament = {
  __typename?: 'Tournament';
  currentRound?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  players?: Maybe<Array<Player>>;
  rounds?: Maybe<Array<Round>>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<TournamentStatus>;
};

export type TournamentStartInput = {
  endDate: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  teams: Array<InputTeam>;
};

export enum TournamentStatus {
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String'];
  players: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam?: string | null };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'Query', teams?: Array<{ __typename?: 'Team', id: string, losses?: number | null, name?: string | null, players?: Array<{ __typename?: 'Player', nationality: string, age: number, firstName: string, id: string, lastName: string }> | null }> | null };

export type GetAllTournamentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTournamentsQuery = { __typename?: 'Query', tournaments?: Array<{ __typename?: 'Tournament', name?: string | null, startDate?: string | null, endDate?: string | null, id: string, status?: TournamentStatus | null, currentRound?: string | null, players?: Array<{ __typename?: 'Player', id: string, firstName: string, lastName: string, nationality: string, age: number }> | null, rounds?: Array<{ __typename?: 'Round', id: string, name?: string | null, games?: Array<{ __typename?: 'Game', id: string, datetime?: string | null, teams?: Array<{ __typename?: 'Team', id: string, name?: string | null }> | null }> | null }> | null } | null> | null };


export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"players"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"players"},"value":{"kind":"Variable","name":{"kind":"Name","value":"players"}}}]}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const GetAllTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"losses"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nationality"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTeamsQuery, GetAllTeamsQueryVariables>;
export const GetAllTournamentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentRound"}},{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"datetime"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>;