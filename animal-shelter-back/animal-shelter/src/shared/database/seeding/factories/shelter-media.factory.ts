import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { ShelterMedia } from '../../entities/shelter-media.entity';



define(ShelterMedia, (faker: typeof Faker.faker) => {
  const shelterMedia = new ShelterMedia();
  shelterMedia.url = 'default-shelter.png'
  shelterMedia.type = 'png'
  return shelterMedia;
});