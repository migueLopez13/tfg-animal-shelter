import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../../entities/user.entity";
import { Shelter } from "../../entities/shelter.entity";
import { Animal } from "../../entities/animal.entity";
import { Role } from "../../entities/role.entity";
import { Vaccine } from "../../entities/vaccine.entity";
import { UserAddress } from "../../entities/user-address.entity";
import { UserPhone } from "../../entities/user-phone.entity";
import { AnimalMedia } from "../../entities/animal-media.entity";
import { Adoption } from "../../entities/adoption.entity";
import { UserSocial } from "../../entities/user-social.entity";
import { ShelterMedia } from "../../entities/shelter-media.entity";
import { ShelterSocial } from "../../entities/shelter-social.entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const shelters = await factory(Shelter)().createMany(10);
    const vaccines = await factory(Vaccine)().createMany(10);

    await factory(Role)().map(async (role) => {
      role.id = '1'
      role.name = 'admin'
      return role
    }).create();

    await factory(Role)().map(async (role) => {
      role.id = '2'
      role.name = 'user'
      return role
    }).create();

    const users = await factory(User)().map(async (user) => {
      user.role = [
        { id: '2', name: 'user' } as Role
      ]
      return user
    }).createMany(20);


    for (const user of users) {
      await factory(UserAddress)().map(async (address) => {
        address.user = user
        return address
      }).create();

      await factory(UserPhone)().map(async (phone) => {
        phone.user = user
        return phone
      }).create();

      await factory(UserSocial)().map(async (social) => {
        social.user = user
        return social
      }).create();
    }

    const admin = await factory((User))().map(async (user) => {
      user.email = 'mlopari216@g.educaand.com'
      user.name = 'miguel'
      user.surname = 'lopez'
      user.role = [
        { id: '1', name: 'admin' } as Role,
        { id: '2', name: 'user' } as Role
      ]
      return user
    }).create();

    await factory(UserAddress)().map(async (address) => {
      address.user = admin
      return address
    }).create();

    await factory(UserPhone)().map(async (phone) => {
      phone.user = admin
      return phone
    }).create();

    await factory(UserSocial)().map(async (social) => {
      social.user = admin
      return social
    }).create();


    for (const shelter of shelters) {
      await factory(ShelterMedia)().map(async (media) => {
        media.shelter = shelter
        return media
      }).create();
      await factory(ShelterSocial)().map(async (social) => {
        social.shelter = shelter
        return social
      }).create();

      const animals = await factory(Animal)()
        .map(async (animal) => {
          animal.shelter = shelter;
          animal.vaccine = vaccines;

          return animal;
        })
        .createMany(30);

      for (const animal of animals) {
        await factory(AnimalMedia)().map(async (media) => {
          media.animal = animal
          return media
        }).create();
      }

      for (let i = 0; i < 5; i++) {
        await factory(Adoption)().map(async (adoption) => {
          adoption.animal = animals[i]
          adoption.user = users[Math.floor(Math.random() * users.length)];
          return adoption
        }).create();
      }
    }
  }
}

