import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserSocial } from '../../entities/user-social.entity';



define(UserSocial, (faker: typeof Faker.faker) => {
  const userSocial = new UserSocial();
  userSocial.name = 'instagram'
  userSocial.url = 'https://www.instagram.com/naschurmann/?hl=es'
  return userSocial;
});