import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Adoption } from 'src/shared/database/entities/adoption.entity';


@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,
  ) { }

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

