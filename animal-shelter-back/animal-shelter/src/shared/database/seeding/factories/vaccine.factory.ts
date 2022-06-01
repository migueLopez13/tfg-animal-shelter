import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Vaccine } from '../../entities/vaccine.entity';



define(Vaccine, (gen: typeof faker) => {
  const vaccine = new Vaccine();
  return vaccine;
});