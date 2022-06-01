import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Adoption } from "../../entities/adoption.entity";


define(Adoption, (gen: typeof faker) => {
  const adoption = new Adoption();
  adoption.date = gen.faker.date.birthdate()
  return adoption;
});