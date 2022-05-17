import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterMediaEntity } from '../shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from '../shelter-social/entities/shelter-social.entity';
import { ShelterEntity } from './entities/shelter.entity';
import { SheltersController } from './shelter.controller';
import { ShelterService } from './shelter.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ShelterEntity,
      ShelterMediaEntity,
      ShelterSocialEntity,
    ]),
  ],
  controllers: [SheltersController],
  providers: [ShelterService],
})
export class ShelterModule {}
