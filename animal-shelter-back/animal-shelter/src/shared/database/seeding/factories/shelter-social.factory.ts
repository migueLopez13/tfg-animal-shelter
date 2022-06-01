import * as Faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { ShelterSocial } from '../../entities/shelter-social.entity';




define(ShelterSocial, (faker: typeof Faker.faker) => {
  const shelterSocial = new ShelterSocial();
  shelterSocial.url = 'https://www.protectoramalaga.com/'
  shelterSocial.name = 'web'
  return shelterSocial;
});