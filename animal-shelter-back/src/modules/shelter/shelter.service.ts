import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from './entities/shelter.entity';
import { ShelterDTO } from 'src/shared/domain/dto/shelter.dto';
import { ShelterMapper } from './shelter.mapper';
import { ShelterMediaEntity } from '../shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from '../shelter-social/entities/shelter-social.entity';

@Injectable()
export class ShelterService {
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly shelterRepository: Repository<ShelterEntity>,
    @InjectRepository(ShelterMediaEntity)
    private readonly mediaRepository: Repository<ShelterMediaEntity>,
    @InjectRepository(ShelterSocialEntity)
    private readonly socialRepository: Repository<ShelterSocialEntity>,
    private readonly mapper: ShelterMapper,
  ) {}

  find = () => this.shelterRepository.find();

  findOne = (email: string) => this.shelterRepository.findOne(email);

  insert = (shelter: ShelterDTO) => {
    const shelterToAdd = this.mapper.dtoToEntity(shelter);

    const result = this.shelterRepository.insert(shelterToAdd);

    shelterToAdd.social.map(async (social) => {
      social.shelter = shelterToAdd;
      return await this.socialRepository.insert(social);
    });

    shelterToAdd.media.map(async (media) => {
      media.shelter = shelterToAdd;
      return await this.mediaRepository.insert(media);
    });

    return result;
  };

  update = async (shelter: ShelterDTO) => {
    const updatedShelter = this.mapper.dtoToEntity(shelter);

    updatedShelter.social.map(async (social) => {
      if (this.socialRepository.findOne(social.id)) {
        this.socialRepository.update(social.id, social);
      } else {
        this.socialRepository.insert(social);
      }
    });

    updatedShelter.media.map(async (media) => {
      if (this.mediaRepository.findOne(media.id)) {
        this.mediaRepository.update(media.id, media);
      } else {
        this.mediaRepository.insert(media);
      }
    });

    return this.shelterRepository.update(shelter.email, updatedShelter);
  };

  delete = async (email: string) => {
    const shelterToDelete = await this.shelterRepository.findOne(email);

    shelterToDelete.social.map(
      async (social) => await this.socialRepository.delete(social.id),
    );

    shelterToDelete.media.map(
      async (media) => await this.mediaRepository.delete(media.id),
    );

    return this.shelterRepository.delete(email);
  };
}
