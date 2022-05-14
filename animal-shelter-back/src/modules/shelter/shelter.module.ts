import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity } from './entities/shelter.entity';
import { SheltersController } from './shelter.controller';
import { SheltersMapper } from './shelter.mapper';
import { SheltersService } from './shelter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterEntity])],
  controllers: [SheltersController],
  providers: [SheltersService, SheltersMapper],
})
export class SheltersModule {}
