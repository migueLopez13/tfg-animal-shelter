import { ShelterDTO } from 'src/shared/domain/dto/shelter.dto';
import { ShelterMediaEntity } from '../shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from '../shelter-social/entities/shelter-social.entity';
import { ShelterEntity } from './entities/shelter.entity';

export class ShelterMapper {
  dtoToEntity(shelter: ShelterDTO) {
    console.log(shelter);
    const social = shelter.social.map(
      (social) => new ShelterSocialEntity(social.id, social.name, social.url),
    );

    const media = shelter.media.map(
      (media) => new ShelterMediaEntity(media.id, media.type, media.url),
    );

    return new ShelterEntity(
      shelter.email,
      shelter.name,
      shelter.description,
      shelter.countryCode,
      shelter.stateCode,
      shelter.zip,
      shelter.address,
      media,
      social,
    );
  }
}
