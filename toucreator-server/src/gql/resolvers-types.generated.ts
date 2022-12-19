import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CountryInfo: ResolverTypeWrapper<CountryInfo>;
  Game: ResolverTypeWrapper<Game>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InputGameUpdate: InputGameUpdate;
  InputPlayer: InputPlayer;
  InputTeam: InputTeam;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  Round: ResolverTypeWrapper<Round>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Team: ResolverTypeWrapper<Team>;
  Tournament: ResolverTypeWrapper<Tournament>;
  TournamentStartInput: TournamentStartInput;
  TournamentStatus: TournamentStatus;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CountryInfo: CountryInfo;
  Game: Game;
  ID: Scalars['ID'];
  InputGameUpdate: InputGameUpdate;
  InputPlayer: InputPlayer;
  InputTeam: InputTeam;
  Int: Scalars['Int'];
  Mutation: {};
  Player: Player;
  Query: {};
  Round: Round;
  String: Scalars['String'];
  Team: Team;
  Tournament: Tournament;
  TournamentStartInput: TournamentStartInput;
}>;

export type CountryInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryInfo'] = ResolversParentTypes['CountryInfo']> = ResolversObject<{
  alpha_2_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alpha_3_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  en_short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  num_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Game'] = ResolversParentTypes['Game']> = ResolversObject<{
  datetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  result?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<ResolversTypes['Team']>>, ParentType, ContextType>;
  winner?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createPlayer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreatePlayerArgs, 'age' | 'firstName' | 'lastName' | 'nationality'>>;
  createTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'name' | 'players'>>;
  nextRound?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationNextRoundArgs, 'tournamentId'>>;
  startTournament?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationStartTournamentArgs, 'input'>>;
  updateGame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUpdateGameArgs, 'input' | 'tournamentId'>>;
}>;

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  countryCodes?: Resolver<Array<ResolversTypes['CountryInfo']>, ParentType, ContextType>;
  currentRound?: Resolver<Maybe<ResolversTypes['Round']>, ParentType, ContextType, RequireFields<QueryCurrentRoundArgs, 'tournamentId'>>;
  isTournamentFinished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryIsTournamentFinishedArgs, 'torunamentId'>>;
  players?: Resolver<Maybe<Array<ResolversTypes['Player']>>, ParentType, ContextType, Partial<QueryPlayersArgs>>;
  teams?: Resolver<Maybe<Array<ResolversTypes['Team']>>, ParentType, ContextType>;
  tournaments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tournament']>>>, ParentType, ContextType, Partial<QueryTournamentsArgs>>;
}>;

export type RoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Round'] = ResolversParentTypes['Round']> = ResolversObject<{
  games?: Resolver<Maybe<Array<ResolversTypes['Game']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<ResolversTypes['Player']>>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournament'] = ResolversParentTypes['Tournament']> = ResolversObject<{
  currentRound?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<ResolversTypes['Player']>>, ParentType, ContextType>;
  rounds?: Resolver<Maybe<Array<ResolversTypes['Round']>>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TournamentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  CountryInfo?: CountryInfoResolvers<ContextType>;
  Game?: GameResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Round?: RoundResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Tournament?: TournamentResolvers<ContextType>;
}>;

