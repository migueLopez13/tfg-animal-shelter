import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserSocial } from '../../entities/user-social.entity';



define(UserSocial, (gen: typeof faker) => {
  const userSocialUserSocial = new UserSocial();
  return userSocialUserSocial;
});