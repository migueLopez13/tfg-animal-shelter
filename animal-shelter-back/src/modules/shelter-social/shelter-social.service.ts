import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterSocialEntity } from './entities/shelter-social.entity';
import { ShelterSocialDTO } from 'src/shared/domain/dto/shelter-social.dto';
import { ShelterSocialMapper } from './shelter-social.mapper';

@Injectable()
export class ShelterSocialService {
  constructor(
    @InjectRepository(ShelterSocialEntity)
    private readonly shelterRepository: Repository<ShelterSocialEntity>,
    private readonly mapper: ShelterSocialMapper,
  ) {}

  find = () => this.shelterRepository.find();

  findOne = (id: string) => this.shelterRepository.findOne(id);

  insert = async (social: ShelterSocialDTO) => {
    return this.shelterRepository.insert(social);
  };

  update = (social: ShelterSocialDTO) =>
    this.shelterRepository.update(social.id, this.mapper.dtoToEntity(social));

  delete = (id: string) => this.shelterRepository.delete(id);
}
