import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';
import { AnimalMediaEntity } from '../animal-media/entities/animal-media.entity';
import { VaccineEntity } from '../vaccine/entities/vaccine.entity';
import { AnimalEntity } from './entities/animal.entity';

export class AnimalMapper {
  dtoToEntity(animal: AnimalDTO) {
    const vaccine = animal.vaccine.map(
      (vaccine) => new VaccineEntity(vaccine.id, vaccine.name),
    );

    const media = animal.media.map(
      (media) => new AnimalMediaEntity(media.id, media.type, media.url),
    );

    return new AnimalEntity(
      animal.id,
      animal.name,
      animal.birthdate,
      animal.gender,
      animal.kind,
      animal.breed,
      animal.size,
      animal.dewormed,
      animal.description,
      animal.arrivalDate,
      animal.shelterEmail,
      media,
      vaccine,
    );
  }
}
