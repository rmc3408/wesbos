import { statelessSessions } from '@keystone-6/core/session'
import { createAuth } from '@keystone-6/auth'
import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'id name',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    skipKeystoneWelcome: true,
    // Add initial roles
  },
})

const server = {
  cors: { origin: [ process.env.FRONTEND_NEXT_URL! ], credentials: true },
  port: process.env.KEYSTONE_PORT!,
}

const session = statelessSessions({
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.KEYSTONE_COOKIE_SECRET!
})

export { withAuth, session, server }
