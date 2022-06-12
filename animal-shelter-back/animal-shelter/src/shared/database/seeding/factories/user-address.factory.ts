import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserAddress } from '../../entities/user-address.entity';



define(UserAddress, (faker: typeof Faker.faker) => {
  const userAddress = new UserAddress();
  userAddress.countryCode = 'ES'
  userAddress.stateCode = 'AN'
  userAddress.provinceCode = 'ES-MA'
  userAddress.zip = '29003'
  userAddress.address = 'calle de prueba'
  userAddress.label = faker.name.firstName()

  return userAddress;
});