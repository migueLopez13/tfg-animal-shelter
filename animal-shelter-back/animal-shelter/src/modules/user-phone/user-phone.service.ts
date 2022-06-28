import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPhone } from '../../shared/database/entities/user-phone.entity';
import { UserPhoneDTO } from '../../shared/domain/dto/user-phone.dto';

@Injectable()
export class UserPhoneService {
  constructor(
    @InjectRepository(UserPhone)
    private readonly phoneRepository: Repository<UserPhone>,
  ) { }

  find = () => this.phoneRepository.find();

  findOne = (id: string) => this.phoneRepository.findOne(id);

  insert = async (phone: UserPhoneDTO) => {
    return this.phoneRepository.insert(phone);
  };

  update = (phone: UserPhoneDTO) =>
    this.phoneRepository.update(phone.id, phone);

  delete = (id: string) => this.phoneRepository.delete(id);
}
