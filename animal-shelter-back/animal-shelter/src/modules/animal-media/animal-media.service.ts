import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalMedia } from '../../shared/database/entities/animal-media.entity';
import { AnimalMediaDTO } from '../../shared/domain/dto/animal-media.dto';

@Injectable()
export class AnimalMediaService {
  constructor(
    @InjectRepository(AnimalMedia)
    private readonly animalRepository: Repository<AnimalMedia>,
  ) { }

  find = () => this.animalRepository.find();

  findOne = (id: string) => this.animalRepository.findOne(id);

  insert = async (media: AnimalMediaDTO) => {
    return this.animalRepository.insert(media);
  };

  update = (media: AnimalMediaDTO) =>
    this.animalRepository.update(media.id, media);

  delete = (id: string) => this.animalRepository.delete(id);
}
