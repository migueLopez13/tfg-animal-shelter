import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalMediaController } from './animal-media.controller';
import { AnimalMediaService } from './animal-media.service';
import { AnimalMedia } from '../../shared/database/entities/animal-media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalMedia])],
  controllers: [AnimalMediaController],
  providers: [AnimalMediaService],
})
export class AnimalMediaModule { }
