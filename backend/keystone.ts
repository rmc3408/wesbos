import { config } from '@keystone-6/core'
import { config as dotenvConfig } from 'dotenv'
import { lists } from './schemas/schema'
import type { KeystoneContext } from '@keystone-6/core/types'
import { session, withAuth, server } from './auth'
dotenvConfig()

type SessionCtxType = {
  session: undefined | {
        listKey: 'User'
        itemId: string
        data: {
          id: string
          name: string
        }
      }
}

export default config(
  withAuth({
    server: server,
    session: session,
    db: {
      provider: 'postgresql',
      url: process.env.POSTGRES_URL!,
      onConnect: async (_context: KeystoneContext) => {
        console.log(`🚀🚀🚀 Database Server is running at ${process.env.POSTGRES_PORT}`)
      },
      enableLogging: true,
      idField: { kind: 'uuid' },
      shadowDatabaseUrl: process.env.POSTGRES_URL!,
    },
    lists: lists,
    ui: {
      isAccessAllowed: (context) => {
        const { session }: SessionCtxType = context.session
        return !!context.session.itemId
      },
    },
  })
)
