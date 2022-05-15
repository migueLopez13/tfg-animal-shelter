import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shelter-social')
export class ShelterSocialEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => ShelterEntity, (shelter) => shelter.social)
  shelter: ShelterEntity;

  @Column()
  name: string;

  @Column()
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
