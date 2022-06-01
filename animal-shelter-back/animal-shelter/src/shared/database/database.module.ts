import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
})
export class DatabaseModule { }
