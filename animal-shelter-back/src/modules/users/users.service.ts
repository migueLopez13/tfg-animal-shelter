import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersMapper } from './users.mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly mapper: UsersMapper,
  ) {}

  find = () => this.usersRepository.find();

  findOne = (id: string) => this.usersRepository.findOne(id);

  insert = async (user: UserDTO) =>
    this.usersRepository.insert( await this.mapper.dtoToEntity(user));

  update = async (user: UserDTO) =>
    this.usersRepository.update(
      user.id,
      await this.mapper.dtoToEntity(user),
    );

  delete = async (id: string) => this.usersRepository.delete(id);
}
