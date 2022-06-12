import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserPhone } from '../../entities/user-phone.entity';



define(UserPhone, (faker: typeof Faker.faker) => {
  const userPhone = new UserPhone();
  userPhone.countryCode = '+34'
  userPhone.phone = '123456789'
  userPhone.label = faker.name.firstName()
  return userPhone;
});