import { UserAddressDTO } from 'src/shared/domain/dto/user_address.dto';
import { UsersService } from '../user/user.service';
import { UserAddressEntity } from './entities/user_address.entity';

export class UserAddressMapper {
  constructor(private readonly userService: UsersService) {}

  async dtoToEntity({
    id,
    userEmail,
    countryCode,
    stateCode,
    provinceCode,
    zip,
    address,
  }: UserAddressDTO): Promise<UserAddressEntity> {
    const user = await this.userService.findByEmail(userEmail);
    return new UserAddressEntity(
      id,
      user,
      countryCode,
      stateCode,
      provinceCode,
      zip,
      address,
    );
  }

  entityToDto({
    id,
    user,
    country_code,
    state_code,
    province_code,
    zip,
    address,
  }: UserAddressEntity): UserAddressDTO {
    return new UserAddressDTO(
      id,
      user.email,
      country_code,
      state_code,
      province_code,
      zip,
      address,
    );
  }
}
