import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaccine } from '../../shared/database/entities/vaccine.entity';
import { VaccinesController } from './vaccine.controller';
import { VaccineService } from './vaccine.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vaccine])],
  controllers: [VaccinesController],
  providers: [VaccineService],
})
export class VaccineModule { }
