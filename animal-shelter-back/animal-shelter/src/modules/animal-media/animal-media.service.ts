import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalMediaEntity } from './entities/animal-media.entity';
import { AnimalMediaMapper } from './animal-media.mapper';
import { AnimalMediaDTO } from '../../shared/domain/dto/animal-media.dto';

@Injectable()
export class AnimalMediaService {
  constructor(
    @InjectRepository(AnimalMediaEntity)
    private readonly animalRepository: Repository<AnimalMediaEntity>,
    private readonly mapper: AnimalMediaMapper,
  ) {}

  find = () => this.animalRepository.find();

  findOne = (id: string) => this.animalRepository.findOne(id);

  insert = async (media: AnimalMediaDTO) => {
    return this.animalRepository.insert(media);
  };

  update = (media: AnimalMediaDTO) =>
    this.animalRepository.update(media.id, this.mapper.dtoToEntity(media));

  delete = (id: string) => this.animalRepository.delete(id);
}
