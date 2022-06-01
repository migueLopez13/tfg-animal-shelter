import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Animal } from '../../entities/animal.entity';



define(Animal, (gen: typeof faker) => {
  const animal = new Animal();
  return animal;
});