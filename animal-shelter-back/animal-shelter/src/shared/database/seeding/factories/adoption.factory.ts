import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Adoption } from "../../entities/adoption.entity";


define(Adoption, (faker: typeof Faker.faker) => {
  const adoption = new Adoption();
  adoption.date = faker.date.recent()
  return adoption;
});