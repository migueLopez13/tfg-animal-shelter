import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterMedia } from '../../shared/database/entities/shelter-media.entity';
import { ShelterMediaController } from './shelter-media.controller';
import { ShelterMediaService } from './shelter-media.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterMedia])],
  controllers: [ShelterMediaController],
  providers: [ShelterMediaService],
})
export class ShelterMediaModule { }
