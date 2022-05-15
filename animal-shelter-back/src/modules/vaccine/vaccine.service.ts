import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VaccineEntity } from './entities/vaccine.entity';
import { VaccineDTO } from 'src/shared/domain/dto/vaccine.dto';
import { VaccineMapper } from './vaccine.mapper';

@Injectable()
export class VaccineService {
  constructor(
    @InjectRepository(VaccineEntity)
    private readonly vaccineRepository: Repository<VaccineEntity>,
    private readonly mapper: VaccineMapper,
  ) {}

  find = () => this.vaccineRepository.find();

  findOne = (id: string) => this.vaccineRepository.findOne(id);

  insert = async (vaccine: VaccineDTO) => {
    return this.vaccineRepository.insert(vaccine);
  };

  update = async (vaccine: VaccineDTO) =>
    this.vaccineRepository.update(vaccine.id, this.mapper.dtoToEntity(vaccine));

  delete = async (id: string) => this.vaccineRepository.delete(id);
}
