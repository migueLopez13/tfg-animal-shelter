import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Role } from '../../entities/role.entity';



define(Role, (gen: typeof faker) => {
  const role = new Role();
  return role;
});