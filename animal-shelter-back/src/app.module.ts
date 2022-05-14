import { Module } from '@nestjs/common';
import { AdoptionsModule } from './modules/adoption/adoption.module';
import { AnimalsModule } from './modules/animal/animal.module';
import { SheltersModule } from './modules/shelter/shelter.module';
import { UsersModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AnimalsModule,
    UsersModule,
    AdoptionsModule,
    SheltersModule,
  ],
})
export class AppModule {}
