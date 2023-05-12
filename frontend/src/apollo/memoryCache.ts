import { NextSSRInMemoryCache } from "@apollo/experimental-nextjs-app-support/ssr";

export const memoryCache = new NextSSRInMemoryCache({
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
