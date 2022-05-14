import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddressEntity } from './entities/user_address.entity';
import { UserAddressDTO } from 'src/shared/domain/dto/user_address.dto';
import { UserAddressMapper } from './user_address.mapper';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddressEntity)
    private readonly addressRepository: Repository<UserAddressEntity>,
    private readonly mapper: UserAddressMapper,
  ) {}

  find = () => this.addressRepository.find();

  findOne = (id: string) => this.addressRepository.findOne(id);

  insert = async (address: UserAddressDTO) =>
    this.addressRepository.insert(await this.mapper.dtoToEntity(address));

  update = async (address: UserAddressDTO) =>
    this.addressRepository.update(
      address.id,
      await this.mapper.dtoToEntity(address),
    );

  delete = async (id: string) => this.addressRepository.delete(id);
}
