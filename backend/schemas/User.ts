import { text, password } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const User = list({
  ui: {
    // UI
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true }),
    password: password(),
  },
});
