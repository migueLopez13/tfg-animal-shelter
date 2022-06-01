import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterMedia } from '../../shared/database/entities/shelter-media.entity';
import { ShelterSocial } from '../../shared/database/entities/shelter-social.entity';
import { Shelter } from '../../shared/database/entities/shelter.entity';
import { SheltersController } from './shelter.controller';
import { ShelterService } from './shelter.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Shelter,
      ShelterMedia,
      ShelterSocial,
    ]),
  ],
  controllers: [SheltersController],
  providers: [ShelterService],
})
export class ShelterModule { }
