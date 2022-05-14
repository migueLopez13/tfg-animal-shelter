import { UserAddressDTO } from 'src/shared/domain/dto/user-address.dto';
import { UserAddressEntity } from './entities/user-address.entity';

export class UserAddressMapper {
  constructor() {}
  dtoToEntity(address: UserAddressDTO): UserAddressEntity {
    return new UserAddressEntity(
      address.id,
      address.countryCode,
      address.stateCode,
      address.provinceCode,
      address.zip,
      address.address,
      address.userEmail,
    );
  }

  entityToDto(address: UserAddressEntity): UserAddressDTO {
    return new UserAddressDTO(
      address.id,
      address.countryCode,
      address.stateCode,
      address.provinceCode,
      address.zip,
      address.address,
      address.userEmail,
    );
  }
}
