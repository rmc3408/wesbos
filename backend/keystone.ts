import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import 'dotenv/config';

const sessionConfigured = {
    maxAge: 60 * 60 * 24 * 100, //cookies will be avaliable for 100days
    secret: process.env.COOKIE_SECRET
}

export default config({
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
        //add schema by user role
        isAccessAllowed: () => true,
    }
});
