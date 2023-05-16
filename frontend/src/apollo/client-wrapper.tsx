'use client'

import { ApolloClient, HttpLink, SuspenseCache, from } from '@apollo/client'
import { PropsWithChildren } from 'react'
import { memoryCache } from './memoryCache'
import { errorLink, SSRlink, httpLink } from './link'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'


function makeClient() {
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
