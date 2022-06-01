
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Animal } from './animal.entity';

@Entity('vaccine')
export class Vaccine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Animal, (animal) => animal.media)
  animal: Animal;

  @Column()
  name: string;
}
