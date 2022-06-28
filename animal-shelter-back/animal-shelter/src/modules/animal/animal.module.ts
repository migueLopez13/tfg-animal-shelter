import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaccine } from 'src/shared/database/entities/vaccine.entity';
import { AnimalMedia } from '../../shared/database/entities/animal-media.entity';
import { Animal } from '../../shared/database/entities/animal.entity';
import { AnimalsController } from './animal.controller';
import { AnimalService } from './animal.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Animal, AnimalMedia, Vaccine]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalService],
})
export class AnimalModule { }
