import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsController } from './animal.controller';
import { AnimalsMapper } from './animal.mapper';
import { AnimalsService } from './animal.service';
import { AnimalEntity } from './entities/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [AnimalsController],
  providers: [AnimalsService, AnimalsMapper],
})
export class AnimalsModule {}
