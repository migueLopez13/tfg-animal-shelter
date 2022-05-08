import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdoptionDTO } from 'src/shared/domain/dto/adoption.dto';
import { AdoptionsMapper } from './adoptions.mapper';
import { AdoptionEntity } from './entities/adoption.entity';

@Injectable()
export class AdoptionsService {
  constructor(
    @InjectRepository(AdoptionEntity)
    private readonly adoptionRepository: Repository<AdoptionEntity>,
    private readonly mapper: AdoptionsMapper,
  ) {}

  find = () => this.adoptionRepository.find();

  findOne = (id: string) => this.adoptionRepository.findOne(id);

  insert = async (adoption: AdoptionDTO) =>
    this.adoptionRepository.insert( await this.mapper.dtoToEntity(adoption));

  update = async (adoptionToUpdate: AdoptionDTO) =>
    this.adoptionRepository.update(
      adoptionToUpdate.id,
      await this.mapper.dtoToEntity(adoptionToUpdate),
    );

  delete = (id: string) => this.adoptionRepository.delete(id);
}
