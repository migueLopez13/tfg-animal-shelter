import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { Animal } from './animal.entity';
import { User } from './user.entity';


@Entity('adoption')
export class Adoption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.email, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @Column()
  userEmail: string;

  @OneToOne(() => Animal, (animal) => animal.id, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @Column()
  animalId: string;

  @Column({ type: 'timestamp', nullable: false })
  date: Date;
}
