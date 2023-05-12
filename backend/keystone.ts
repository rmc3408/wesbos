import { config } from '@keystone-6/core'
import { lists } from './schemas/schema'
import type { KeystoneContext } from '@keystone-6/core/types'
import { session, withAuth, server } from './auth'
import { insertSeedData } from './seed-data'
import { config as dotenvConfig } from 'dotenv'
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
      // local database
      // provider: 'sqlite',
      // url: 'file:./keystone.db',
      provider: 'postgresql',
      url: process.env.POSTGRES_URL!,
      onConnect: async (context: KeystoneContext) => {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(context);
        }
        console.log(`🚀🚀🚀 Database Server is running at ${process.env.POSTGRES_PORT}`)
      },
      enableLogging: true,
      idField: { kind: 'uuid' },
      shadowDatabaseUrl: process.env.POSTGRES_URL!,
    },
    lists: lists,
    ui: {
      isAccessAllowed: (context) => {      
        return !!context.session?.itemId
      },
    }
  })
)
