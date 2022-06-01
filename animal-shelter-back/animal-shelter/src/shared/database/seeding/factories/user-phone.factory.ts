import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserPhone } from '../../entities/user-phone.entity';



define(UserPhone, (gen: typeof faker) => {
  const userPhone = new UserPhone();
  return userPhone;
});