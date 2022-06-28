import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from '../../shared/domain/dto/user.dto';
import { User } from '../../shared/database/entities/user.entity';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { Role } from 'src/shared/database/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  find = () => this.usersRepository.find();

  findOne = (email: string) => this.usersRepository.findOne(email);

  insert = async (user: any) => {
    const userEntity = new User()
    userEntity.name = user.name
    userEntity.surname = user.surname
    userEntity.email = user.email
    userEntity.avatar = ''

    const role = new Role()
    role.id = '2'

    userEntity.role = [role]

    if (user.password) {
      const pass = new UserCredential()
      pass.password = user.password
      pass.userEmail = user.email
      userEntity.password = pass
    } else {
      const pass = new UserCredential()
      pass.password = '1234'
      pass.userEmail = user.email
      userEntity.password = pass
    }

    return this.usersRepository.save(userEntity);
  };

  updateAvatar = async (email: string, file: string) => {
    const user = await this.usersRepository.findOne(email)
    user.avatar = file
    return user.save()
  }

  update = (email: string, user: UserDTO) => {
    const userEntity = new User()
    userEntity.name = user.name
    userEntity.surname = user.surname
    userEntity.email = user.email
    userEntity.avatar = user.avatar

    return this.usersRepository.update(email, userEntity);
  };

  delete = async (email: string) => {
    const entity = await this.usersRepository.findOne(email);
    return this.usersRepository.delete({ email });
  };
}
