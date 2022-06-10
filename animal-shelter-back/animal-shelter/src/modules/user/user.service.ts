import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from '../../shared/domain/dto/user.dto';
import { User } from '../../shared/database/entities/user.entity';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  find = () => this.usersRepository.find();

  findOne = (email: string) => this.usersRepository.findOne(email);

  insert = async (user: any) => {
    if (user.password) {
      const pass = new UserCredential()
      pass.password = user.password
      pass.userEmail = user.email
      user.password = pass
    }
    return this.usersRepository.save(user);
  };

  updateAvatar = async (email: string, file: Express.Multer.File) => {
    const user = await this.usersRepository.findOne(email)
    user.avatar = `${file.destination}/${file.filename}`
    return user.save()
  }

  update = (user: UserDTO) => {
    return this.usersRepository.save(user);
  };

  delete = async (email: string) => {
    const entity = await this.usersRepository.findOne(email);
    return this.usersRepository.remove(entity);
  };
}
