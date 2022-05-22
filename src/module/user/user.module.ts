import { UserController } from './presentation/controllers/user.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './data/infra/database/database.providers';
import { UserService } from './domain/services/user.service';
import { UserRepository } from './data/repositories/user.repository';
import { userProviders } from './user.providers';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [ UserRepository, UserService,  ...databaseProviders, ...userProviders],
  
})
export class UserModule {}