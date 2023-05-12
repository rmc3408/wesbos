import { HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`)
})

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// for SSR environment
export const SSRlink = new SSRMultipartLink({ stripDefer: true })

export const httpLink = new HttpLink({ 
  uri: process.env.GRAPHQL_DEV_ENDPOINT!,
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  fetchOptions: { cache: "no-store" },
})