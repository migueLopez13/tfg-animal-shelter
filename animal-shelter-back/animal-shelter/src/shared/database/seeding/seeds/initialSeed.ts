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
import { UserCredential } from "../../entities/user-credentials.entity";

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    const shelters = await factory(Shelter)().createMany(10);
    const users = await factory(User)().createMany(20);

    await factory(Vaccine)().map(async (vaccine) => {
      vaccine.name = 'polivalente'
      vaccine.animal = []
      return vaccine;
    }).create();

    await factory(Vaccine)().map(async (vaccine) => {
      vaccine.name = 'rabia'
      vaccine.animal = []
      return vaccine;
    }).create();

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
      user.email = 'admin@admin.com'
      user.name = 'admin'
      user.surname = 'admin'
      return user
    }).create();

    await factory((UserCredential))().map(async (credential) => {
      credential.user = admin
      return credential
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

    const user = await factory((User))().map(async (user) => {
      user.email = 'user@user.com'
      user.name = 'user'
      user.surname = 'user'
      return user
    }).create();

    await factory((UserCredential))().map(async (credential) => {
      credential.user = user
      return credential
    }).create();

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

    await factory(Role)().map(async (role) => {
      role.id = '1'
      role.name = 'admin'
      role.users = [admin]
      return role
    }).create();

    await factory(Role)().map(async (role) => {
      role.id = '2'
      role.name = 'user'
      role.users = [...users, admin, user]
      return role
    }).create();

    let animals = []

    for (const shelter of shelters) {
      await factory(ShelterMedia)().map(async (media) => {
        media.shelter = shelter
        return media
      }).create();
      await factory(ShelterSocial)().map(async (social) => {
        social.shelter = shelter
        return social
      }).create();

      const dogs = await factory(Animal)()
        .map(async (animal) => {
          animal.kind = 'dog'
          animal.shelter = shelter;
          return animal;
        })
        .createMany(10);

      const cats = await factory(Animal)()
        .map(async (animal) => {
          animal.kind = 'cat'
          animal.shelter = shelter;
          return animal;
        })
        .createMany(10);

      const birds = await factory(Animal)()
        .map(async (animal) => {
          animal.kind = 'bird'
          animal.shelter = shelter;
          return animal;
        })
        .createMany(10);

      for (const animal of dogs) {
        await factory(AnimalMedia)().map(async (media) => {
          media.url = 'dog-default.webp'
          media.animal = animal
          return media
        }).create();
      }

      for (const animal of cats) {
        await factory(AnimalMedia)().map(async (media) => {
          media.url = 'cat-default.png'
          media.animal = animal
          return media
        }).create();
      }

      for (const animal of birds) {
        await factory(AnimalMedia)().map(async (media) => {
          media.url = 'bird-default.png'
          media.animal = animal
          return media
        }).create();
      }

      for (let i = 0; i < 3; i++) {
        await factory(Adoption)().map(async (adoption) => {
          adoption.animal = dogs[i]
          adoption.user = users[Math.floor(Math.random() * users.length)];
          return adoption
        }).create();
      }

      animals = [...animals, ...cats, ...dogs, ...birds]
    }
    await factory(Adoption)().map(async (adoption) => {
      adoption.animal = animals[3]
      adoption.user = admin
      return adoption
    }).create();
  }
}

