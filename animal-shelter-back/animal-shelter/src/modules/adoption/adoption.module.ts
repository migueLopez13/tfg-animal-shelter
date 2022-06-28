import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adoption } from '../../shared/database/entities/adoption.entity';
import { AdoptionsController } from './adoption.controller';
import { AdoptionService } from './adoption.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adoption])],
  controllers: [AdoptionsController],
  providers: [AdoptionService],
})
export class AdoptionModule { }
