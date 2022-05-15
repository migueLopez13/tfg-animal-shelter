import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineEntity } from './entities/vaccine.entity';
import { VaccinesController } from './vaccine.controller';
import { VaccineMapper } from './vaccine.mapper';
import { VaccineService } from './vaccine.service';

@Module({
  imports: [TypeOrmModule.forFeature([VaccineEntity])],
  controllers: [VaccinesController],
  providers: [VaccineService, VaccineMapper],
})
export class VaccineModule {}
