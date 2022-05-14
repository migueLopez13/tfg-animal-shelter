import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddressEntity } from './entities/user-address.entity';
import { UserAddressController } from './user-address.controller';
import { UserAddressMapper } from './user-address.mapper';
import { UserAddressService } from './user-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddressEntity])],
  controllers: [UserAddressController],
  providers: [UserAddressService, UserAddressMapper],
})
export class UserAddressModule {}
