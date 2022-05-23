import { AuthService } from './domain/services/auth.service';

import { UserController } from './presentation/controllers/user.controller';
import { Module } from '@nestjs/common';
import { UserService, AddressService } from './domain/services';
import { UserRepository } from './infra/repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy, JwtStrategy } from './infra/security';
import { AddressRepository } from './infra/repositories/address.repository';
import { databaseProviders } from './infra/database/database.providers';
import { userProviders } from './user.providers';

 

@Module({
  imports: [
    PassportModule,   
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
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
    AddressService,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class UserModule {}
