import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { UserSocialModule } from './modules/user_social/user_social.module';
import { UserPhoneModule } from './modules/user_phone/user_phone.module';
import { UserAddressModule } from './modules/user_address/user_address.module';
import { RoleModule } from './modules/role/role.module';
import { UserRoleModule } from './modules/user_role/user_role.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    UserSocialModule,
    UserPhoneModule,
    UserAddressModule,
    RoleModule,
    UserRoleModule,
  ],
})
export class AppModule {}
