import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionsService } from './adoptions.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [AdoptionsController],
  providers:[AdoptionsService]
})
export class AdoptionsModule {}
