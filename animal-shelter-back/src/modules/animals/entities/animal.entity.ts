import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnimalEntity {
  @PrimaryGeneratedColumn()
  id: string;
}