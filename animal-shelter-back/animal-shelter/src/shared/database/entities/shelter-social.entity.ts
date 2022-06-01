
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Shelter } from './shelter.entity';

@Entity('shelter-social')
export class ShelterSocial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Shelter, (shelter) => shelter.social)
  shelter: Shelter;

  @Column()
  name: string;

  @Column()
  url: string;

}
