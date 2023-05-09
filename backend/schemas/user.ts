import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
  password,
  timestamp,
  checkbox,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const User = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password(),
    isAdmin: checkbox(),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
  }
})
