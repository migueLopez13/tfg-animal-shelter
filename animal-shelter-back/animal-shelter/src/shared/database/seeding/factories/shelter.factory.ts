import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { Shelter } from '../../entities/shelter.entity';



define(Shelter, (faker: typeof Faker.faker) => {
  const shelter = new Shelter();
  shelter.email = faker.internet.email()
  shelter.name = faker.company.companyName()
  shelter.description = faker.lorem.paragraph(6)
  shelter.stateCode = faker.address.state()
  shelter.countryCode = faker.address.countryCode()
  shelter.zip = faker.address.zipCode()
  shelter.address = faker.address.streetAddress()

  return shelter;
});