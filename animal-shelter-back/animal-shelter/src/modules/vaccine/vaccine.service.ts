import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vaccine } from '../../shared/database/entities/vaccine.entity';
import { VaccineDTO } from '../../shared/domain/dto/vaccine.dto';

@Injectable()
export class VaccineService {
  constructor(
    @InjectRepository(Vaccine)
    private readonly vaccineRepository: Repository<Vaccine>,
  ) { }

  find = () => this.vaccineRepository.find();

  findOne = (id: string) => this.vaccineRepository.findOne(id);

  insert = async (vaccine: VaccineDTO) => {
    return this.vaccineRepository.insert(vaccine);
  };

  update = async (vaccine: VaccineDTO) =>
    this.vaccineRepository.update(vaccine.id, vaccine);

  delete = async (id: string) => this.vaccineRepository.delete(id);
}
