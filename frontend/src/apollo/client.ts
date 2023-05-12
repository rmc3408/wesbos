import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
//const { createUploadLink } = require('apollo-upload-client')
import 'dotenv/config'

const memoryCache = new InMemoryCache({
  possibleTypes: {
    //authenticatedItem: ["User"],
  },
  typePolicies: {
    Query: {
      fields: {
        // allProducts: paginationField(),
      },
    },
  },
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`)
})
const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
  return fetch(url, {
    ...init,
    headers: {
      ...init.headers,
      'Access-Control-Allow-Origin': '*',
      Cookie: 'Apollo-client inside enhancedFetch',
    },
  }).then((response) => response)
}
const uploadLink = new HttpLink({
  uri: process.env.GRAPHQL_DEV_ENDPOINT,
  fetchOptions: {
    mode: 'cors',
  },
  credentials: 'include',
  fetch: enhancedFetch,
})

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    name: 'ApolloClient-sickFits',
    ssrMode: true,
    link: from([errorLink, uploadLink]),
    cache: memoryCache,
  })
})

export default getClient
