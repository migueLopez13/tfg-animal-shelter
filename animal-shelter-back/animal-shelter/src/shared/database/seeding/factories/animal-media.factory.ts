import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { AnimalMedia } from '../../entities/animal-media.entity';



define(AnimalMedia, (faker: typeof Faker.faker) => {
  const animalMedia = new AnimalMedia();
  animalMedia.url = 'default-animal.png'
  animalMedia.type = 'png'
  return animalMedia;
});