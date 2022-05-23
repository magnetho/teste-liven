import { HealthController } from './controller/health.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
