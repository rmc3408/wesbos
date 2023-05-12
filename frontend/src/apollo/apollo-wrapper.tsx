'use client'

import { ApolloClient, from, HttpLink, SuspenseCache } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { PropsWithChildren } from 'react'


function apolloClient() {
  const httpLink = new HttpLink({ 
    uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
    fetchOptions: {
      mode: 'cors',
    },
    credentials: 'include',
  })

  const SSRlink = new SSRMultipartLink({ stripDefer: true })
  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: typeof window === 'undefined' ? from([ SSRlink, httpLink ]) : httpLink,
  })
}

function makeSuspenseCache() {
  return new SuspenseCache()
}

export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={apolloClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider> 
  )
}