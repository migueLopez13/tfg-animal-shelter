import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterMediaEntity } from './entities/shelter-media.entity';
import { ShelterMediaDTO } from 'src/shared/domain/dto/shelter-media.dto';
import { ShelterMediaMapper } from './shelter-media.mapper';

@Injectable()
export class ShelterMediaService {
  constructor(
    @InjectRepository(ShelterMediaEntity)
    private readonly shelterRepository: Repository<ShelterMediaEntity>,
    private readonly mapper: ShelterMediaMapper,
  ) {}

  find = () => this.shelterRepository.find();

  findOne = (id: string) => this.shelterRepository.findOne(id);

  insert = async (media: ShelterMediaDTO) => {
    return this.shelterRepository.insert(media);
  };

  update = (media: ShelterMediaDTO) =>
    this.shelterRepository.update(media.id, this.mapper.dtoToEntity(media));

  delete = (id: string) => this.shelterRepository.delete(id);
}
