import { AnimalEntity } from 'src/modules/animal/entities/animal.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animal-media')
export class AnimalMediaEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => AnimalEntity, (animal) => animal.media)
  animal: AnimalEntity;

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
