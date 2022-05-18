import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { UserSocialModule } from './modules/user-social/user-social.module';
import { UserPhoneModule } from './modules/user-phone/user-phone.module';
import { UserAddressModule } from './modules/user-address/user-address.module';
import { RoleModule } from './modules/role/role.module';
import { ShelterModule } from './modules/shelter/shelter.module';
import { ShelterMediaModule } from './modules/shelter-media/shelter-media.module';
import { ShelterSocialModule } from './modules/shelter-social/shelter-social.module';
import { AnimalModule } from './modules/animal/animal.module';
import { AnimalMediaModule } from './modules/animal-media/animal-media.module';
import { VaccineModule } from './modules/vaccine/vaccine.module';
import { AdoptionModule } from './modules/adoption/adoption.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADDRESS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
    ]),
    DatabaseModule,
    UsersModule,
    UserSocialModule,
    UserPhoneModule,
    UserAddressModule,
    RoleModule,
    ShelterModule,
    ShelterMediaModule,
    ShelterSocialModule,
    AnimalModule,
    AnimalMediaModule,
    VaccineModule,
    AdoptionModule,
  ],
  controllers: [],
})
export class AppModule {}
