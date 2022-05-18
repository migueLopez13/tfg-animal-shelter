import { AnimalMediaDTO } from '../../shared/domain/dto/animal-media.dto';
import { AnimalMediaEntity } from './entities/animal-media.entity';

export class AnimalMediaMapper {
  constructor() {}
  dtoToEntity(media: AnimalMediaDTO): AnimalMediaEntity {
    return new AnimalMediaEntity(media.id, media.type, media.url);
  }

  entityToDto(media: AnimalMediaEntity): AnimalMediaDTO {
    return new AnimalMediaDTO(media.id, media.type, media.url);
  }
}
