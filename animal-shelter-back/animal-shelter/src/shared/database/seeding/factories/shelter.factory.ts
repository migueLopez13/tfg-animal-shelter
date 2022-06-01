import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Shelter } from '../../entities/shelter.entity';



define(Shelter, (gen: typeof faker) => {
  const shelterShelter = new Shelter();
  return shelterShelter;
});