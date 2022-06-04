
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Shelter } from './shelter.entity';

@Entity('shelter-media')
export class ShelterMedia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Shelter, (shelter) => shelter.media)
  shelter: Shelter;

  @Column()
  shelterEmail: string;

  @Column()
  type: string;

  @Column()
  url: string;

}
