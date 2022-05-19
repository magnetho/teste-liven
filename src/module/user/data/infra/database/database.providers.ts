
import { createConnection } from 'typeorm';
import { AddressSchema, UserSchema } from '../../schema';
import database from './database.config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: database.conn_host,
        port: database.conn_port,
        username: database.conn_username,
        password: database.conn_password,
        database: database.conn_database,
        entities: [UserSchema, AddressSchema],
        migrationsTableName: 'migration',
        migrations: ['src/migration/*.ts'],
        cli: {
          migrationsDir: 'src/migration',
        },
      }),
  },
];
