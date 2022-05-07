import { Module } from '@nestjs/common';
import { AdoptionsModule } from './modules/adoptions/adoptions.module';
import { AnimalsModule } from './modules/animals/animals.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AnimalsModule,
    UsersModule,
    AdoptionsModule
  ],
})
export class AppModule {}
