import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { UserAddress } from '../../entities/user-address.entity';



define(UserAddress, (gen: typeof faker) => {
  const userAddress = new UserAddress();
  return userAddress;
});