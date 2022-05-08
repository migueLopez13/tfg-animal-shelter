import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity } from './entities/shelter.entity';
import { SheltersController } from './shelters.controller';
import { SheltersMapper } from './shelters.mapper';
import { SheltersService } from './shelters.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterEntity])],
  controllers: [SheltersController],
  providers:[SheltersService, SheltersMapper]
})
export class SheltersModule {}
