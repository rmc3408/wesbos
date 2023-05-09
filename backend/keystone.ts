import { config, list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { password, text } from '@keystone-6/core/fields'

export default config({
  db: {
    provider: 'postgresql',
    url: 'postgres://rmc3408:secret123@localhost:5432/sick',
    onConnect: async (context) => {
      console.log(`Server is running at 5432`)
    },
    enableLogging: true,
    idField: { kind: 'uuid' },
    shadowDatabaseUrl: 'postgres://rmc3408:secret123@localhost:5432/sick'
  },
  lists: {
    User: list({
      access: allowAll,
      fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        password: password(),
      },
    }),
  },
})