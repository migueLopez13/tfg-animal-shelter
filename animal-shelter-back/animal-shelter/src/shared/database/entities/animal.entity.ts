
import { AnimalMedia } from './animal-media.entity';
import { Shelter } from './shelter.entity';
import { Vaccine } from './vaccine.entity';
import { Adoption } from './adoption.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity
} from 'typeorm';


export enum SizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

@Entity('animal')
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthdate: string;

  @Column()
  gender: string;

  @Column()
  kind: string;

  @Column()
  breed: string;

  @Column({
    type: 'enum',
    enum: SizeEnum,
  })
  size: string;

  @Column()
  dewormed: boolean;

  @Column()
  description: string;

  @Column()
  arrivalDate: string;

  @ManyToOne(() => Shelter, (shelter) => shelter.email)
  @Column()
  shelterEmail: string;

  @OneToMany(() => AnimalMedia, (media) => media.animal, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  media: AnimalMedia[];

  @OneToMany(() => Vaccine, (vaccine) => vaccine.animal, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  vaccine: Vaccine[];

  @OneToOne(
    () => Adoption,
    (adoption: Adoption) => adoption.animalId,
  )
  adoption: Adoption;

}
