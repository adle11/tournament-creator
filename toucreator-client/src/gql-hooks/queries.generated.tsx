import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetNationalitiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetNationalitiesQuery = { __typename?: 'Query', countryCodes: Array<{ __typename?: 'CountryInfo', alpha_2_code?: string | null, nationality?: string | null }> };

export type GetAllPlayersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', players?: Array<{ __typename?: 'Player', id: string, firstName: string, lastName: string, nationality: string, age: number }> | null };


export const GetNationalitiesDocument = gql`
    query GetNationalities {
  countryCodes {
    alpha_2_code
    nationality
  }
}
    `;

/**
 * __useGetNationalitiesQuery__
 *
 * To run a query within a React component, call `useGetNationalitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNationalitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNationalitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNationalitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetNationalitiesQuery, GetNationalitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNationalitiesQuery, GetNationalitiesQueryVariables>(GetNationalitiesDocument, options);
      }
export function useGetNationalitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNationalitiesQuery, GetNationalitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNationalitiesQuery, GetNationalitiesQueryVariables>(GetNationalitiesDocument, options);
        }
export type GetNationalitiesQueryHookResult = ReturnType<typeof useGetNationalitiesQuery>;
export type GetNationalitiesLazyQueryHookResult = ReturnType<typeof useGetNationalitiesLazyQuery>;
export type GetNationalitiesQueryResult = Apollo.QueryResult<GetNationalitiesQuery, GetNationalitiesQueryVariables>;
export const GetAllPlayersDocument = gql`
    query GetAllPlayers {
  players {
    id
    firstName
    lastName
    nationality
    age
  }
}
    `;

/**
 * __useGetAllPlayersQuery__
 *
 * To run a query within a React component, call `useGetAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
      }
export function useGetAllPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
        }
export type GetAllPlayersQueryHookResult = ReturnType<typeof useGetAllPlayersQuery>;
export type GetAllPlayersLazyQueryHookResult = ReturnType<typeof useGetAllPlayersLazyQuery>;
export type GetAllPlayersQueryResult = Apollo.QueryResult<GetAllPlayersQuery, GetAllPlayersQueryVariables>;