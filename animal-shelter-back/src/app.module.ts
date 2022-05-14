import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { UserSocialModule } from './modules/user-social/user-social.module';
import { UserPhoneModule } from './modules/user-phone/user-phone.module';
import { UserAddressModule } from './modules/user-address/user-address.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    UserSocialModule,
    UserPhoneModule,
    UserAddressModule,
    RoleModule,
  ],
})
export class AppModule {}
