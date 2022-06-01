import * as Faker from '@faker-js/faker/';
import { define } from "typeorm-seeding";
import { Animal } from '../../entities/animal.entity';



define(Animal, (faker: typeof Faker.faker) => {
  const animal = new Animal();
  animal.name = faker.name.firstName()
  animal.birthdate = faker.date.past().toString()
  animal.gender = 'male'
  animal.kind = 'dog'
  animal.breed = faker.random.word()
  animal.size = 'medium'
  animal.dewormed = true
  animal.description = faker.lorem.paragraph(5)
  animal.arrivalDate = faker.date.recent().toString()

  return animal;
});