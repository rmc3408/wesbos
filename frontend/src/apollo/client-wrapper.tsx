'use client'

import { ApolloClient, SuspenseCache, from } from '@apollo/client'
import { PropsWithChildren } from 'react'
import { memoryCache } from './memoryCache'
import { errorLink, httpLink, SSRlink } from './link'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
//import { createUploadLink } from 'apollo-upload-client'


function makeClient() {
  return new ApolloClient({
    cache: memoryCache,
    link: from([ errorLink, SSRlink, httpLink ])
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

// Use when is CLIENT components, so wrapp component rootLayout  
export default function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider> 
  )
}
