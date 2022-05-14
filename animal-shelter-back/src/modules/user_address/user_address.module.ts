import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddressEntity } from './entities/user_address.entity';
import { UserAddressController } from './user_address.controller';
import { UserAddressMapper } from './user_address.mapper';
import { UserAddressService } from './user_address.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddressEntity])],
  controllers: [UserAddressController],
  providers: [UserAddressService, UserAddressMapper],
})
export class UserAddressModule {}
