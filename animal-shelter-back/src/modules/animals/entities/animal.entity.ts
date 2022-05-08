import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('animals')
export class AnimalEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthdate: string;

  @Column()
  gender: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  size: string;

  @Column()
  dewormed: boolean;

  @Column()
  arrivalDate: string;

  constructor() {}
}
