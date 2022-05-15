import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterMediaEntity } from './entities/shelter-media.entity';
import { ShelterMediaController } from './shelter-media.controller';
import { ShelterMediaMapper } from './shelter-media.mapper';
import { ShelterMediaService } from './shelter-media.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterMediaEntity])],
  controllers: [ShelterMediaController],
  providers: [ShelterMediaService, ShelterMediaMapper],
})
export class ShelterMediaModule {}
