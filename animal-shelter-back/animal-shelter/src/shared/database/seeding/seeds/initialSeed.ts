import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../../entities/user.entity";
import { Adoption } from "../../entities/adoption.entity";
import { Animal } from "../../entities/animal.entity";
import { AnimalMedia } from "../../entities/animal-media.entity";
import { Shelter } from "../../entities/shelter.entity";
import { UserAddress } from "../../entities/user-address.entity";
import { UserPhone } from "../../entities/user-phone.entity";
import { UserSocial } from "../../entities/user-social.entity";
import { Vaccine } from "../../entities/vaccine.entity";
import { Post } from "@nestjs/common";
import { Role } from "../../entities/role.entity";
import { ShelterMedia } from "../../entities/shelter-media.entity";
import { ShelterSocial } from "../../entities/shelter-social.entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const user = await factory(User)().createMany(15);
    const adoption = await factory(Adoption)().createMany(15);
    const animalMedia = await factory(AnimalMedia)().createMany(15);
    const animal = await factory(Animal)().createMany(15);
    const role = await factory(Role)().createMany(15);
    const shelterMedia = await factory(ShelterMedia)().createMany(15);
    const shelterSocial = await factory(ShelterSocial)().createMany(15);
    const shelter = await factory(Shelter)().createMany(15);
    const userAddress = await factory(UserAddress)().createMany(15);
    const userPhone = await factory(UserPhone)().createMany(15);
    const userSocial = await factory(UserSocial)().createMany(15);
    const vaccine = await factory(Vaccine)().createMany(15);

  }
}