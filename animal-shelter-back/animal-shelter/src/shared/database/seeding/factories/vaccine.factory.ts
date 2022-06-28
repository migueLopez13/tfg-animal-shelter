import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Vaccine } from '../../entities/vaccine.entity';



define(Vaccine, (faker: typeof Faker.faker) => {
  const vaccine = new Vaccine();
  vaccine.name = faker.random.word()
  return vaccine;
});