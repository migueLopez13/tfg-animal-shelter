import { ShelterSocialDTO } from '../../shared/domain/dto/shelter-social.dto';
import { ShelterSocialEntity } from './entities/shelter-social.entity';

export class ShelterSocialMapper {
  constructor() {}
  dtoToEntity(social: ShelterSocialDTO): ShelterSocialEntity {
    return new ShelterSocialEntity(social.id, social.name, social.url);
  }

  entityToDto(social: ShelterSocialEntity): ShelterSocialDTO {
    return new ShelterSocialDTO(social.id, social.name, social.url);
  }
}
