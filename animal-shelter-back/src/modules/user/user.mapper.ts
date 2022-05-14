import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UserEntity } from './entities/user.entity';

export class UsersMapper {
  constructor() {}

  async dtoToEntity(user: UserDTO): Promise<UserEntity> {
    const newEntity = new UserEntity();

    newEntity.name = user.name;
    newEntity.description = user.description;
    newEntity.surname = user.surname;
    newEntity.username = user.username;
    newEntity.email = user.email;
    newEntity.phone = user.phone;
    newEntity.address = user.address;
    newEntity.postalCode = user.postalCode;

    return newEntity;
  }

  async entityToDto(user: UserEntity): Promise<UserDTO> {
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      username: user.username,
      email: user.email,
      phone: user.phone,
      address: user.address,
      postalCode: user.postalCode,
      description: user.description,
    };
  }
}
