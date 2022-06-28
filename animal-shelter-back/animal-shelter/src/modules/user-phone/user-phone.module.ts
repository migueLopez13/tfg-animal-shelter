import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPhone } from '../../shared/database/entities/user-phone.entity';
import { UserPhoneController } from './user-phone.controller';
import { UserPhoneMapper } from './user-phone.mapper';
import { UserPhoneService } from './user-phone.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPhone])],
  controllers: [UserPhoneController],
  providers: [UserPhoneService, UserPhoneMapper],
})
export class UserPhoneModule { }
