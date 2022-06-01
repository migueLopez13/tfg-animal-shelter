import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { AnimalMedia } from '../../entities/animal-media.entity';



define(AnimalMedia, (gen: typeof faker) => {
  const animalMedia = new AnimalMedia();
  return animalMedia;
});