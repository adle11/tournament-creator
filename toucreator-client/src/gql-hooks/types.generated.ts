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
