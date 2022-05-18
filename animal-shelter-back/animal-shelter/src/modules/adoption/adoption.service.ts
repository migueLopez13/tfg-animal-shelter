import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AdoptionsEntity } from './entities/adoption.entity';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(AdoptionsEntity)
    private readonly adoptionRepository: Repository<AdoptionsEntity>,
  ) {}

  find = () => this.adoptionRepository.find();

  findOne = (id: string) => this.adoptionRepository.findOne(id);

  insert = (adoption: any) => {
    return this.adoptionRepository.save(adoption);
  };

  update = (adoption: any) => {
    return this.adoptionRepository.save(adoption);
  };

  delete = async (id: string) => {
    const entity = await this.adoptionRepository.findOne(id);
    return this.adoptionRepository.remove(entity);
  };
}
