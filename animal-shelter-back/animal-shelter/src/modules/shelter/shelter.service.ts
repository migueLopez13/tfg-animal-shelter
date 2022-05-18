import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from './entities/shelter.entity';
import { ShelterDTO } from '../../shared/domain/dto/shelter.dto';

@Injectable()
export class ShelterService {
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly shelterRepository: Repository<ShelterEntity>,
  ) {}

  find = () => this.shelterRepository.find();

  findOne = (email: string) => this.shelterRepository.findOne(email);

  insert = (shelter: ShelterDTO) => {
    return this.shelterRepository.save(shelter);
  };

  update = (shelter: ShelterDTO) => {
    return this.shelterRepository.save(shelter);
  };

  delete = async (email: string) => {
    const entity = await this.shelterRepository.findOne(email);
    return this.shelterRepository.remove(entity);
  };
}
