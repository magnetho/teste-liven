import { UserModule } from './module/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
