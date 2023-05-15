'use client'

import { ApolloClient, HttpLink, SuspenseCache, from } from '@apollo/client'
import { PropsWithChildren } from 'react'
import { memoryCache } from './memoryCache'
import { errorLink, SSRlink } from './link'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
//import { createUploadLink } from 'apollo-upload-client'


function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_DEV_ENDPOINT,
  })

  return new ApolloClient({
    name: 'apolloClient-CSR',
    ssrMode: true,
    connectToDevTools: true,
    cache: memoryCache,
    link: from([errorLink, SSRlink, httpLink]),
  })
}

function makeSuspenseCache() {
  return new SuspenseCache()
}

// Use when is CLIENT components, so wrapp component rootLayout
export default function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider>
  )
}
