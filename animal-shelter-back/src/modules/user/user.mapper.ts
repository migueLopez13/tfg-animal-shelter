import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';

export class UsersMapper {
  constructor() {}

  dtoToEntity({ id, name, surname, email, avatar }: UserDTO) {
    return new UserEntity(id, email, name, surname, avatar);
  }

  entityToDto({ id, name, surname, email, avatar }: UserEntity) {
    return new UserDTO(id, email, name, surname, avatar);
  }
}
