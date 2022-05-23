import { HealthModule } from './module/health/health.module';
import { UserModule } from './module/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
