import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shelter-media')
export class ShelterMediaEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => ShelterEntity, (shelter) => shelter.media)
  shelter: ShelterEntity;

  @Column()
  type: string;

  @Column()
  url: string;

  constructor(id: string, type: string, url: string) {
    this.id = id;
    this.type = type;
    this.url = url;
  }
}
