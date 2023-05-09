import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { KeystoneContext } from '@keystone-next/types';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const DATABASE = process.env.DATABASE_URL;
const SESSION = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: DATABASE,
      async onConnect(ctx: KeystoneContext) {
        // console.log(cfg);
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(ctx);
        }
      },
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      isAccessAllowed: (ctx: KeystoneContext) => !!ctx.session?.data,
      // path: '/admin',
    },
    session: withItemData(statelessSessions(SESSION), {
      User: 'id',
    }),
  })
);
