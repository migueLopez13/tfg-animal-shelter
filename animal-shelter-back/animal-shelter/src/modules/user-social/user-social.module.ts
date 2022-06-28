import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSocial } from '../../shared/database/entities/user-social.entity';
import { UserSocialController } from './user-social.controller';
import { UserSocialService } from './user-social.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSocial])],
  controllers: [UserSocialController],
  providers: [UserSocialService],
})
export class UserSocialModule { }
