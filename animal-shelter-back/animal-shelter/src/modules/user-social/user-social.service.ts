import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSocial } from '../../shared/database/entities/user-social.entity';
import { UserSocialDTO } from '../../shared/domain/dto/user-social.dto';


@Injectable()
export class UserSocialService {
  constructor(
    @InjectRepository(UserSocial)
    private readonly socialRepository: Repository<UserSocial>,
  ) { }

  find = () => this.socialRepository.find();

  findOne = (id: string) => this.socialRepository.findOne(id);

  insert = async (social: UserSocialDTO) => {
    return this.socialRepository.insert(social);
  };

  update = (social: UserSocialDTO) =>
    this.socialRepository.update(social.id, social);

  delete = (id: string) => this.socialRepository.delete(id);
}
