import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  find = () => this.usersRepository.find();

  findOne = (email: string) => this.usersRepository.findOne(email);

  insert = (user: UserDTO) => {
    return this.usersRepository.save(user);
  };

  update = (user: UserDTO) => {
    return this.usersRepository.save(user);
  };

  delete = async (email: string) => {
    const entity = await this.usersRepository.findOne(email);
    return this.usersRepository.remove(entity);
  };
}
