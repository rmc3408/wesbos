import { ApolloClient, from } from '@apollo/client'
import { registerApolloClient  } from '@apollo/experimental-nextjs-app-support/rsc'
import { memoryCache } from './memoryCache'
import { errorLink, httpLink } from './link'


// Use when is SERVER components, no need SSRlink 
const { getClient } = registerApolloClient(() => {

  return new ApolloClient({
    name: 'apolloClient-SSR',
    cache: memoryCache,
    link: from([ errorLink, httpLink ])
  })
})
const apolloClient = getClient()

export default apolloClient
