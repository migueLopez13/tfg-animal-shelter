import faker from '@faker-js/faker';
import { define } from "typeorm-seeding";
import { ShelterSocial } from '../../entities/shelter-social.entity';



define(ShelterSocial, (gen: typeof faker) => {
  const shelterSocialShelterSocial = new ShelterSocial();
  return shelterSocialShelterSocial;
});