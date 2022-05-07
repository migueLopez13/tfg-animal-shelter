import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animasl.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [AnimalsController],
  providers:[AnimalsService]
})
export class AnimalsModule {}
