import { AnimalEntity } from 'src/modules/animal/entities/animal.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vaccine')
export class VaccineEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => AnimalEntity, (animal) => animal.media)
  animal: AnimalEntity;

  @Column()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
