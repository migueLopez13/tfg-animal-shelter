import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalMediaController } from './animal-media.controller';
import { AnimalMediaMapper } from './animal-media.mapper';
import { AnimalMediaService } from './animal-media.service';
import { AnimalMediaEntity } from './entities/animal-media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalMediaEntity])],
  controllers: [AnimalMediaController],
  providers: [AnimalMediaService, AnimalMediaMapper],
})
export class AnimalMediaModule {}
