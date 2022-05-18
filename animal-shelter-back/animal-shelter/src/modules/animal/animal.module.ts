import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalMediaEntity } from '../animal-media/entities/animal-media.entity';
import { VaccineEntity } from '../vaccine/entities/vaccine.entity';
import { AnimalsController } from './animal.controller';
import { AnimalService } from './animal.service';
import { AnimalEntity } from './entities/animal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalEntity, AnimalMediaEntity, VaccineEntity]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalService],
})
export class AnimalModule {}
