import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}

  find = () => this.animalRepository.find();

  findOne = (id: string) => this.animalRepository.findOne(id);

  insert = (animal: any) => {
    return this.animalRepository.save(animal);
  };

  update = (animal: any) => {
    return this.animalRepository.save(animal);
  };

  delete = async (id: string) => {
    const entity = await this.animalRepository.findOne(id);
    return this.animalRepository.remove(entity);
  };
}
