import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterSocial } from '../../shared/database/entities/shelter-social.entity';
import { ShelterSocialDTO } from '../../shared/domain/dto/shelter-social.dto';


@Injectable()
export class ShelterSocialService {
  constructor(
    @InjectRepository(ShelterSocial)
    private readonly shelterRepository: Repository<ShelterSocial>,
  ) { }

  find = () => this.shelterRepository.find();

  findOne = (id: string) => this.shelterRepository.findOne(id);

  insert = async (social: ShelterSocialDTO) => {
    return this.shelterRepository.insert(social);
  };

  update = (social: ShelterSocialDTO) =>
    this.shelterRepository.update(social.id, social);

  delete = (id: string) => this.shelterRepository.delete(id);
}
