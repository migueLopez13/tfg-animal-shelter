import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Shelter } from '../../entities/shelter.entity';



define(Shelter, (faker: typeof Faker.faker) => {
  const shelter = new Shelter();
  shelter.email = faker.internet.email()
  shelter.name = faker.company.companyName()
  shelter.description = faker.lorem.paragraph(6)
  shelter.phone = faker.phone.phoneNumber()
  shelter.provinceCode = faker.address.state()
  shelter.stateCode = faker.address.state()
  shelter.countryCode = faker.address.countryCode()
  shelter.zip = faker.address.zipCode()
  shelter.address = faker.address.streetAddress()
  shelter.latitude = 36.718494
  shelter.longitude = -4.446908
  return shelter;
});