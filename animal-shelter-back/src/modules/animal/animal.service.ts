import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalMediaEntity } from '../animal-media/entities/animal-media.entity';
import { VaccineEntity } from '../vaccine/entities/vaccine.entity';
import { AnimalMapper } from './animal.mapper';
import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
    @InjectRepository(AnimalMediaEntity)
    private readonly mediaRepository: Repository<AnimalMediaEntity>,
    @InjectRepository(VaccineEntity)
    private readonly vaccineRepository: Repository<VaccineEntity>,
    private readonly mapper: AnimalMapper,
  ) {}

  find = () => this.animalRepository.find();

  findOne = (id: string) => this.animalRepository.findOne(id);

  insert = (animal: AnimalDTO) => {
    const animalToAdd = this.mapper.dtoToEntity(animal);
    const result = this.animalRepository.insert(animalToAdd);

    animalToAdd.media.map(async (media) => {
      media.animal = animalToAdd;
      return await this.mediaRepository.insert(media);
    });
    animalToAdd.vaccine.map(async (vaccine) => {
      vaccine.animal = animalToAdd;
      return await this.vaccineRepository.insert(vaccine);
    });

    return result;
  };

  update = async (animal: AnimalDTO) => {
    const updatedAnimal = this.mapper.dtoToEntity(animal);

    updatedAnimal.media.map(async (media) => {
      if (this.mediaRepository.findOne(media.id)) {
        this.mediaRepository.update(media.id, media);
      } else {
        this.mediaRepository.insert(media);
      }
    });

    updatedAnimal.vaccine.map(async (vaccine) => {
      if (this.vaccineRepository.findOne(vaccine.id)) {
        this.vaccineRepository.update(vaccine.id, vaccine);
      } else {
        this.vaccineRepository.insert(vaccine);
      }
    });

    return this.animalRepository.update(animal.id, updatedAnimal);
  };

  delete = async (id: string) => {
    const animalToDelete = await this.animalRepository.findOne(id);

    animalToDelete.vaccine.map(
      async (vaccine) => await this.vaccineRepository.delete(vaccine.id),
    );

    animalToDelete.media.map(
      async (media) => await this.mediaRepository.delete(media.id),
    );

    return this.animalRepository.delete(id);
  };
}
