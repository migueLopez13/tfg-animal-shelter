import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn
} from 'typeorm';
import { Animal } from './animal.entity';
import { User } from './user.entity';


@Entity('adoptions')
export class Adoption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.adoptions, {
    onDelete: "CASCADE"
  })
  user: User;

  @Column()
  userEmail: string;

  @OneToOne(() => Animal, (animal) => animal.adoption, {
    eager: true,
    cascade: ["update"]
  })
  @JoinColumn()
  animal: Animal;

  @Column()
  animalId: string;

  @Column({ type: 'timestamp', nullable: false })
  date: Date;
}
