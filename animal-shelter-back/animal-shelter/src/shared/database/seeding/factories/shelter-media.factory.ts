import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { ShelterMedia } from '../../entities/shelter-media.entity';



define(ShelterMedia, (gen: typeof faker) => {
  const shelterMedia = new ShelterMedia();
  return shelterMedia;
});