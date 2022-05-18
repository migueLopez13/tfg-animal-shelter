import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPhoneEntity } from './entities/user-phone.entity';
import { UserPhoneDTO } from '../../shared/domain/dto/user-phone.dto';
import { UserPhoneMapper } from './user-phone.mapper';

@Injectable()
export class UserPhoneService {
  constructor(
    @InjectRepository(UserPhoneEntity)
    private readonly phoneRepository: Repository<UserPhoneEntity>,
    private readonly mapper: UserPhoneMapper,
  ) {}

  find = () => this.phoneRepository.find();

  findOne = (id: string) => this.phoneRepository.findOne(id);

  insert = async (phone: UserPhoneDTO) => {
    return this.phoneRepository.insert(phone);
  };

  update = (phone: UserPhoneDTO) =>
    this.phoneRepository.update(phone.id, this.mapper.dtoToEntity(phone));

  delete = (id: string) => this.phoneRepository.delete(id);
}
