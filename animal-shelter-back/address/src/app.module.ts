import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Cities } from './entities/cities.entity';
import { Countries } from './entities/countries.entity';
import { States } from './entities/states.entity';
import { CitiesService } from './services/cities.service';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [Cities, Countries, States],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Cities, Countries, States])
  ],
  controllers: [AppController],
  providers: [CountriesService, StatesService, CitiesService],
})
export class AppModule { }
