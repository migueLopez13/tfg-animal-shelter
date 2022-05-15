import { AnimalMediaEntity } from 'src/modules/animal-media/entities/animal-media.entity';
import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { VaccineEntity } from 'src/modules/vaccine/entities/vaccine.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum SizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

@Entity('animals')
export class AnimalEntity {
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

  @ManyToOne(() => ShelterEntity, (shelter) => shelter.email)
  @Column()
  shelterEmail: string;

  @OneToMany(() => AnimalMediaEntity, (media) => media.animal, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  media: AnimalMediaEntity[];

  @OneToMany(() => VaccineEntity, (vaccine) => vaccine.animal, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  vaccine: VaccineEntity[];

  constructor(
    id: string,
    name: string,
    birthdate: string,
    gender: string,
    kind: string,
    breed: string,
    size: string,
    dewormed: boolean,
    description: string,
    arrivalDate: string,
    shelterEmail: string,
    media: AnimalMediaEntity[],
    vaccine: VaccineEntity[],
  ) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
    this.kind = kind;
    this.breed = breed;
    this.size = size;
    this.dewormed = dewormed;
    this.description = description;
    this.arrivalDate = arrivalDate;
    this.shelterEmail = shelterEmail;
    this.media = media;
    this.vaccine = vaccine;
  }
}
