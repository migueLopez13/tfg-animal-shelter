import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShelterEntity {
  @PrimaryGeneratedColumn()
  id: string;
}