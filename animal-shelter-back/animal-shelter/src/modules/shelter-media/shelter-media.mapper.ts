import { ShelterMediaDTO } from '../../shared/domain/dto/shelter-media.dto';
import { ShelterMediaEntity } from './entities/shelter-media.entity';

export class ShelterMediaMapper {
  constructor() {}
  dtoToEntity(media: ShelterMediaDTO): ShelterMediaEntity {
    return new ShelterMediaEntity(media.id, media.type, media.url);
  }

  entityToDto(media: ShelterMediaEntity): ShelterMediaDTO {
    return new ShelterMediaDTO(media.id, media.type, media.url);
  }
}
