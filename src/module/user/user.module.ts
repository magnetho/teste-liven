import { Address } from './domain/entities/address.entity';
import { AuthService } from './domain/services/auth.service';

import { UserController } from './presentation/controllers/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './domain/services/user.service';
import { UserRepository } from './infra/repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy, JwtStrategy } from './infra/security';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities';
import { AddressRepository } from './infra/repositories/Address.repository';
import { databaseProviders } from './infra/database/database.providers';
import { userProviders } from './user.providers';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserRepository,
    AddressRepository,
    JwtStrategy,
    LocalStrategy,
    AuthService,
    UserService,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class UserModule {}
