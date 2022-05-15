import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from '../role/entities/role.entity';
import { RolesMapper } from '../role/role.mapper';
import { RoleModule } from '../role/role.module';
import { RoleService } from '../role/role.service';
import { UserAddressEntity } from '../user-address/entities/user-address.entity';
import { UserAddressMapper } from '../user-address/user-address.mapper';
import { UserAddressModule } from '../user-address/user-address.module';
import { UserAddressService } from '../user-address/user-address.service';
import { UserPhoneEntity } from '../user-phone/entities/user-phone.entity';
import { UserPhoneMapper } from '../user-phone/user-phone.mapper';
import { UserPhoneModule } from '../user-phone/user-phone.module';
import { UserPhoneService } from '../user-phone/user-phone.service';
import { UserSocialEntity } from '../user-social/entities/user-social.entity';
import { UserSocialMapper } from '../user-social/user-social.mapper';
import { UserSocialModule } from '../user-social/user-social.module';
import { UserSocialService } from '../user-social/user-social.service';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './user.controller';
import { UsersMapper } from './user.mapper';
import { UsersService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserAddressEntity,
      UserPhoneEntity,
      UserSocialEntity,
      RoleEntity,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersMapper],
})
export class UsersModule {}
