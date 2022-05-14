import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';
import { AnimalsMapper } from './animal.mapper';
import { AnimalEntity } from './entities/animal.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
    private readonly mapper: AnimalsMapper,
  ) {}

  find = async () => this.animalRepository.find();

  findOne = async (id: string) =>
    this.mapper.entityToDto(await this.animalRepository.findOne(id));

  insert = async (animal: AnimalDTO) =>
    this.animalRepository.insert(await this.mapper.dtoToEntity(animal));

  update = async (animal: AnimalDTO) =>
    this.animalRepository.update(
      animal.id,
      await this.mapper.dtoToEntity(animal),
    );

  delete = (id: string) => this.animalRepository.delete(id);
}
