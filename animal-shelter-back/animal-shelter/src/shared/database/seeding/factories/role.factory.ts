import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Role } from '../../entities/role.entity';



define(Role, (faker: typeof Faker.faker) => {
  const role = new Role();
  role.name = faker.random.word()
  return role;
});