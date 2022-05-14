import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('shelters')
export class ShelterEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  description: string;

  constructor() {}
}