import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { User } from '../../entities/user.entity';



define(User, (faker: typeof Faker.faker) => {
  const user = new User();
  user.name = faker.name.firstName()
  user.surname = faker.name.lastName()
  user.email = faker.internet.email(user.name, user.surname)
  user.avatar = 'default-user.png'
  return user;
});