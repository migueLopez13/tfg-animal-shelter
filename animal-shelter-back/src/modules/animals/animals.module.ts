import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsController } from './animals.controller';
import { AnimalsMapper } from './animals.mapper';
import { AnimalsService } from './animals.service';
import { AnimalEntity } from './entities/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [AnimalsController],
  providers:[AnimalsService, AnimalsMapper]
})
export class AnimalsModule {}
