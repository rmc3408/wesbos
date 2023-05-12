import { ApolloClient, from } from '@apollo/client'
import { registerApolloClient  } from '@apollo/experimental-nextjs-app-support/rsc'
import { memoryCache } from './memoryCache'
import { SSRlink, errorLink, httpLink } from './link'
//import { createUploadLink } from 'apollo-upload-client'


// Use when is SERVER components, no need SSRlink 
const { getClient } = registerApolloClient(() => {

  return new ApolloClient({
    cache: memoryCache,
    link: from([ errorLink, httpLink ])
  })
})

export default getClient
