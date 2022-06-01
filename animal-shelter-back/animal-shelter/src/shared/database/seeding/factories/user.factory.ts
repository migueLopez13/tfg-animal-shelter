import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { User } from '../../entities/user.entity';



define(User, (gen: typeof Faker.faker) => {
  const user = new User();
  user.name = gen.name.firstName()
  user.surname = gen.name.lastName()
  user.email = gen.internet.email(user.name, user.surname)
  user.avatar = gen.internet.avatar()
  return user;
});