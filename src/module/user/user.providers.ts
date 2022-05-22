
import { Connection } from 'typeorm';
import { User, Address } from './domain/entities';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },

  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Address),
    inject: ['DATABASE_CONNECTION'],
  },
];