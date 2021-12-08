import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'
import { User } from './schemas/User';
import 'dotenv/config';

const sessionConfigured = {
    maxAge: 60 * 60 * 24 * 100, //cookies will be avaliable for 100days
    secret: process.env.COOKIE_SECRET
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: { fields: ['name', 'password', 'email'] }
});

export default withAuth(config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
        adapter: 'mongoose',
        url: process.env.DATABASE_URL,
        //add seed-data here
    },
    lists: createSchema({
        User,
    }),
    ui: {
        // Allow every user 
        // isAccessAllowed: () => true,

        // add schema by user role
        isAccessAllowed: ({ session }) => {
            // console.log(session);
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfigured), {
        User: `id name`
    })
}));
