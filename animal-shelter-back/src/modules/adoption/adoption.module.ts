import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionsController } from './adoption.controller';
import { AdoptionsMapper } from './adoption.mapper';
import { AdoptionsService } from './adoption.service';
import { AdoptionEntity } from './entities/adoption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionEntity])],
  controllers: [AdoptionsController],
  providers: [AdoptionsService, AdoptionsMapper],
})
export class AdoptionsModule {}
