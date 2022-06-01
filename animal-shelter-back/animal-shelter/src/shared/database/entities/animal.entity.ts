
import { AnimalMedia } from './animal-media.entity';
import { Shelter } from './shelter.entity';
import { Vaccine } from './vaccine.entity';
import { Adoption } from './adoption.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  BaseEntity,
  JoinTable
} from 'typeorm';


export enum SizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

@Entity('animals')
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

  @ManyToOne(() => Shelter, (shelter) => shelter.animals)
  shelter: Shelter;

  @OneToMany(() => AnimalMedia, (media) => media.animal)
  media: AnimalMedia[];

  @ManyToMany(() => Vaccine, (vaccine) => vaccine.animal)
  @JoinTable()
  vaccine: Vaccine[];

  @OneToOne(
    () => Adoption, (adoption) => adoption.animal,
  )
  adoption: Adoption;

}
