import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPhoneEntity } from './entities/user-phone.entity';
import { UserPhoneController } from './user-phone.controller';
import { UserPhoneMapper } from './user-phone.mapper';
import { UserPhoneService } from './user-phone.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPhoneEntity])],
  controllers: [UserPhoneController],
  providers: [UserPhoneService, UserPhoneMapper],
})
export class UserPhoneModule {}
