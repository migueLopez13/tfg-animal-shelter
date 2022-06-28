import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterMedia } from '../../shared/database/entities/shelter-media.entity';
import { ShelterMediaDTO } from '../../shared/domain/dto/shelter-media.dto';

@Injectable()
export class ShelterMediaService {
  constructor(
    @InjectRepository(ShelterMedia)
    private readonly shelterRepository: Repository<ShelterMedia>,
  ) { }

  find = () => this.shelterRepository.find();

  findOne = (id: string) => this.shelterRepository.findOne(id);

  insert = async (media: ShelterMediaDTO) => {
    return this.shelterRepository.insert(media);
  };

  update = (media: ShelterMediaDTO) =>
    this.shelterRepository.update(media.id, media);

  delete = (id: string) => this.shelterRepository.delete(id);
}
