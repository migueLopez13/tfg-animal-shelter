import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from '../../shared/database/entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) { }

  find = () => this.animalRepository.find();

  findByKind = (kind) => this.animalRepository.find({ kind });

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
