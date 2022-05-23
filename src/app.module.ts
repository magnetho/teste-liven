import { UserModule } from './module/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
