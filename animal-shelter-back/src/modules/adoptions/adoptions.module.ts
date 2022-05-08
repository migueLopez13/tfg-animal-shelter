import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionsMapper } from './adoptions.mapper';
import { AdoptionsService } from './adoptions.service';
import { AdoptionEntity } from './entities/adoption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionEntity])],
  controllers: [AdoptionsController],
  providers: [AdoptionsService, AdoptionsMapper],
})
export class AdoptionsModule {}
