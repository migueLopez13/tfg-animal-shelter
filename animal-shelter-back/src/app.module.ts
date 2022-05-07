import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './modules/animals/animals.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AnimalsModule
  ],
})
export class AppModule {}
