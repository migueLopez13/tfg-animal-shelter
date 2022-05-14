import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersMapper } from './user.mapper';
import { UserAddressService } from '../user-address/user-address.service';
import { UserSocialService } from '../user-social/user-social.service';
import { UserPhoneService } from '../user-phone/user-phone.service';
import { RoleService } from '../role/role.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly mapper: UsersMapper,
    private readonly addressService: UserAddressService,
    private readonly socialService: UserSocialService,
    private readonly phoneService: UserPhoneService,
    private readonly roleService: RoleService,
  ) {}

  find = () => this.usersRepository.find();

  findOne = (email: string) => this.usersRepository.findOne(email);

  insert = async (user: UserDTO) => {
    let response = {};

    this.usersRepository
      .insert(this.mapper.dtoToEntity(user))
      .catch((data) => (response = data));

    user.social.map(async (social) => {
      social.userEmail = user.email;
      await this.socialService
        .insert(social)
        .catch((data) => (response = data));
    });

    user.address.map(async (address) => {
      address.userEmail = user.email;
      await this.addressService
        .insert(address)
        .catch((data) => (response = data));
    });

    user.phone.map(async (phone) => {
      phone.userEmail = user.email;
      await this.phoneService.insert(phone).catch((data) => (response = data));
    });

    user.role.map(async (role) => {
      role.userEmail = user.email;
      await this.roleService.insert(role).catch((data) => (response = data));
    });

    return response;
  };

  update = async (user: UserDTO) =>
    this.usersRepository.update(user.email, this.mapper.dtoToEntity(user));

  delete = async (email: string) => {
    let response = {};
    const user = await this.usersRepository.findOne(email);

    user.social.map(async (social) => {
      await this.socialService
        .delete(social.id)
        .catch((data) => (response = data));
    });

    user.phone.map(async (phone) => {
      await this.phoneService
        .delete(phone.id)
        .catch((data) => (response = data));
    });

    user.address.map(async (address) => {
      await this.addressService
        .delete(address.id)
        .catch((data) => (response = data));
    });

    user.role.map(async (role) => {
      await this.roleService.delete(role.id).catch((data) => (response = data));
    });

    await this.usersRepository.delete(email).catch((data) => (response = data));

    return response;
  };
}
