import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersMapper } from './user.mapper';
import { UserSocialEntity } from '../user-social/entities/user-social.entity';
import { UserAddressEntity } from '../user-address/entities/user-address.entity';
import { UserPhoneEntity } from '../user-phone/entities/user-phone.entity';
import { RoleEntity } from '../role/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    @InjectRepository(UserSocialEntity)
    private readonly socialRepository: Repository<UserSocialEntity>,
    @InjectRepository(UserAddressEntity)
    private readonly addressRepository: Repository<UserAddressEntity>,
    @InjectRepository(UserPhoneEntity)
    private readonly phoneRepository: Repository<UserPhoneEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    private readonly mapper: UsersMapper,
  ) {}

  find = () => this.usersRepository.find();

  findOne = (email: string) => this.usersRepository.findOne(email);

  insert = async (user: UserDTO) => {
    const userToAdd = this.mapper.dtoToEntity(user);

    const result = this.usersRepository.insert(userToAdd);

    userToAdd.social.map(async (social) => {
      social.user = userToAdd;
      return await this.socialRepository.insert(social);
    });

    userToAdd.address.map(async (address) => {
      address.user = userToAdd;
      return await this.addressRepository.insert(address);
    });

    userToAdd.phone.map(async (phone) => {
      phone.user = userToAdd;
      return await this.phoneRepository.insert(phone);
    });

    userToAdd.role.map(async (role) => {
      role.user = userToAdd;
      return await this.roleRepository.insert(role);
    });

    return result;
  };

  update = async (user: UserDTO) => {
    const updatedUser = this.mapper.dtoToEntity(user);

    updatedUser.social.map(async (social) => {
      if (this.socialRepository.findOne(social.id)) {
        this.socialRepository.update(social.id, social);
      } else {
        this.socialRepository.insert(social);
      }
    });

    updatedUser.address.map(async (address) => {
      if (this.addressRepository.findOne(address.id)) {
        this.addressRepository.update(address.id, address);
      } else {
        this.addressRepository.insert(address);
      }
    });

    updatedUser.phone.map(async (phone) => {
      if (this.phoneRepository.findOne(phone.id)) {
        this.phoneRepository.update(phone.id, phone);
      } else {
        this.phoneRepository.insert(phone);
      }
    });

    updatedUser.role.map(async (role) => {
      if (this.roleRepository.findOne(role.id)) {
        this.roleRepository.update(role.id, role);
      } else {
        this.roleRepository.insert(role);
      }
    });

    return this.usersRepository.update(user.email, updatedUser);
  };

  delete = async (email: string) => {
    const userToDelete = await this.usersRepository.findOne(email);

    userToDelete.social.map(
      async (social) => await this.socialRepository.delete(social.id),
    );

    userToDelete.address.map(
      async (address) => await this.addressRepository.delete(address.id),
    );

    userToDelete.phone.map(
      async (phone) => await this.phoneRepository.delete(phone.id),
    );

    userToDelete.role.map(
      async (role) => await this.roleRepository.delete(role.id),
    );

    return this.usersRepository.delete(email);
  };
}
