import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { User } from '../../entities/user.entity';



define(User, (gen: typeof faker) => {
  const userUser = new User();
  return userUser;
});