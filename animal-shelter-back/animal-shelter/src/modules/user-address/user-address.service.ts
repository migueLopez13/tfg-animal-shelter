import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from '../../shared/database/entities/user-address.entity';
import { UserAddressDTO } from '../../shared/domain/dto/user-address.dto';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress)
    private readonly addressRepository: Repository<UserAddress>,
  ) { }

  find = () => this.addressRepository.find();

  findOne = (id: string) => this.addressRepository.findOne(id);

  insert = async (address: UserAddressDTO) => {
    return this.addressRepository.insert(address);
  };

  update = (address: UserAddressDTO) =>
    this.addressRepository.update(address.id, address);

  delete = (id: string) => this.addressRepository.delete(id);
}
