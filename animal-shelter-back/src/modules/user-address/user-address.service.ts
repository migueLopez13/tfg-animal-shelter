import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddressEntity } from './entities/user-address.entity';
import { UserAddressDTO } from 'src/shared/domain/dto/user-address.dto';
import { UserAddressMapper } from './user-address.mapper';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddressEntity)
    private readonly addressRepository: Repository<UserAddressEntity>,
    private readonly mapper: UserAddressMapper,
  ) {}

  find = () => this.addressRepository.find();

  findOne = (id: string) => this.addressRepository.findOne(id);

  insert = async (address: UserAddressDTO) => {
    return this.addressRepository.insert(address);
  };

  update = (address: UserAddressDTO) =>
    this.addressRepository.update(address.id, this.mapper.dtoToEntity(address));

  delete = (id: string) => this.addressRepository.delete(id);
}
