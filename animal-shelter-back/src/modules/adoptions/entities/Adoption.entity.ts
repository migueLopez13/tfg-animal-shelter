import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdoptionEntity {
  @PrimaryGeneratedColumn()
  id: string;
}