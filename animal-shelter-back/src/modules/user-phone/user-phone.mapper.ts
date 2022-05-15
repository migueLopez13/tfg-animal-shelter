import { UserPhoneDTO } from 'src/shared/domain/dto/user-phone.dto';
import { UserPhoneEntity } from './entities/user-phone.entity';

export class UserPhoneMapper {
  constructor() {}
  dtoToEntity(phone: UserPhoneDTO): UserPhoneEntity {
    return new UserPhoneEntity(phone.id, phone.countryCode, phone.phone);
  }

  entityToDto(phone: UserPhoneEntity): UserPhoneDTO {
    return new UserPhoneDTO(phone.id, phone.countryCode, phone.phone);
  }
}
