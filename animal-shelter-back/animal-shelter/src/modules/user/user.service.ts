import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from '../../shared/domain/dto/user.dto';
import { User } from '../../shared/database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

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
