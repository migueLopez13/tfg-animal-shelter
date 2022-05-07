import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheltersController } from './shelters.controller';
import { SheltersService } from './shelters.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [SheltersController],
  providers:[SheltersService]
})
export class SheltersModule {}
