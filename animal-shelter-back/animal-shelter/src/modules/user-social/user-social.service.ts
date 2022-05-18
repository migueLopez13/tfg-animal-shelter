import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSocialEntity } from './entities/user-social.entity';
import { UserSocialDTO } from '../../shared/domain/dto/user-social.dto';
import { UserSocialMapper } from './user-social.mapper';

@Injectable()
export class UserSocialService {
  constructor(
    @InjectRepository(UserSocialEntity)
    private readonly socialRepository: Repository<UserSocialEntity>,
    private readonly mapper: UserSocialMapper,
  ) {}

  find = () => this.socialRepository.find();

  findOne = (id: string) => this.socialRepository.findOne(id);

  insert = async (social: UserSocialDTO) => {
    return this.socialRepository.insert(social);
  };

  update = (social: UserSocialDTO) =>
    this.socialRepository.update(social.id, this.mapper.dtoToEntity(social));

  delete = (id: string) => this.socialRepository.delete(id);
}
