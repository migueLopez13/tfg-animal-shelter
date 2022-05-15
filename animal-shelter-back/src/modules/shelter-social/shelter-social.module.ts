import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterSocialEntity } from './entities/shelter-social.entity';
import { ShelterSocialController } from './shelter-social.controller';
import { ShelterSocialMapper } from './shelter-social.mapper';
import { ShelterSocialService } from './shelter-social.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterSocialEntity])],
  controllers: [ShelterSocialController],
  providers: [ShelterSocialService, ShelterSocialMapper],
})
export class ShelterSocialModule {}
