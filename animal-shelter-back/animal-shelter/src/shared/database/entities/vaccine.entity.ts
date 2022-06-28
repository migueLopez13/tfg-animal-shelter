
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Animal } from './animal.entity';

@Entity('vaccine')
export class Vaccine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => Animal, (animal) => animal.vaccine)
  animal: Animal[];

  @Column({ unique: true })
  name: string;
}
