import { UserSocialDTO } from 'src/shared/domain/dto/user-social.dto';
import { UserSocialEntity } from './entities/user-social.entity';

export class UserSocialMapper {
  constructor() {}
  dtoToEntity(social: UserSocialDTO): UserSocialEntity {
    return new UserSocialEntity(
      social.id,
      social.name,
      social.url,
      social.userEmail,
    );
  }

  entityToDto(social: UserSocialEntity): UserSocialDTO {
    return new UserSocialDTO(
      social.id,
      social.name,
      social.url,
      social.userEmail,
    );
  }
}
