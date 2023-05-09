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
        const { session }: SessionCtxType = context.session
        return !!context.session.itemId
      },
    },
    storage: {
      images_files: {
        kind: 's3',
        type: 'image',
        bucketName: 'wesbos-raph-dev-images',
        region: 'us-east-1',
        accessKeyId: 'AKIAZGGBWYDEGOYDPBX2',
        secretAccessKey: '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',
      }
    }
  })
)
