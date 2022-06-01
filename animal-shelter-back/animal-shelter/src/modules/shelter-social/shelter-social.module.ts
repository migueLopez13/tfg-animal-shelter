import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterSocial } from '../../shared/database/entities/shelter-social.entity';
import { ShelterSocialController } from './shelter-social.controller';
import { ShelterSocialService } from './shelter-social.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterSocial])],
  controllers: [ShelterSocialController],
  providers: [ShelterSocialService],
})
export class ShelterSocialModule { }
