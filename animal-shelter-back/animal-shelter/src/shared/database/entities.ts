import { Adoption } from "./entities/adoption.entity";
import { AnimalMedia } from "./entities/animal-media.entity";
import { Animal } from "./entities/animal.entity";
import { Role } from "./entities/role.entity";
import { ShelterMedia } from "./entities/shelter-media.entity";
import { ShelterSocial } from "./entities/shelter-social.entity";
import { Shelter } from "./entities/shelter.entity";
import { UserAddress } from "./entities/user-address.entity";
import { UserCredential } from "./entities/user-credentials.entity";
import { UserPhone } from "./entities/user-phone.entity";
import { UserSocial } from "./entities/user-social.entity";
import { User } from "./entities/user.entity";
import { Vaccine } from "./entities/vaccine.entity";


export const entities = [
  User,
  Role,
  UserSocial,
  UserAddress,
  UserPhone,
  UserCredential,
  Shelter,
  ShelterSocial,
  ShelterMedia,
  Animal,
  AnimalMedia,
  Vaccine,
  Adoption,
];

export default entities;
