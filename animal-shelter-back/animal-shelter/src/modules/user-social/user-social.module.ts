import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSocialEntity } from './entities/user-social.entity';
import { UserSocialController } from './user-social.controller';
import { UserSocialMapper } from './user-social.mapper';
import { UserSocialService } from './user-social.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSocialEntity])],
  controllers: [UserSocialController],
  providers: [UserSocialService, UserSocialMapper],
})
export class UserSocialModule {}
