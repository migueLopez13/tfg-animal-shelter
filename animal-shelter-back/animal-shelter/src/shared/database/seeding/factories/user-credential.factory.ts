import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserCredential } from '../../entities/user-credentials.entity';



define(UserCredential, (faker: typeof Faker.faker) => {
  const userCredential = new UserCredential();
  userCredential.password = '1234'

  return userCredential;
});