import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionsController } from './adoption.controller';
import { AdoptionService } from './adoption.service';
import { AdoptionsEntity } from './entities/adoption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionsEntity])],
  controllers: [AdoptionsController],
  providers: [AdoptionService],
})
export class AdoptionModule {}
