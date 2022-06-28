
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Animal } from './animal.entity';

@Entity('animal-media')
export class AnimalMedia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Animal, (animal) => animal.media)
  animal: Animal;

  @Column()
  animalId: String

  @Column()
  type: string;

  @Column()
  url: string;
}
