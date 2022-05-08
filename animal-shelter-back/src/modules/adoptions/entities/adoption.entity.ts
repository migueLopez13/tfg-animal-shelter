import {
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsUUID, IsNotEmpty } from 'class-validator';
import { AnimalEntity } from '../../animals/entities/animal.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { ShelterEntity } from 'src/modules/shelters/entities/shelter.entity';
import { AdoptionDTO } from 'src/shared/domain/dto/adoption.dto';

@Entity()
export class AdoptionEntity {
  @IsUUID()
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @OneToMany(() => UserEntity, (user: UserEntity) => user.id, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  userId: string;

  @OneToMany(() => AnimalEntity, (animal: AnimalEntity) => animal.id, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  animalId: string;

  @OneToMany(() => ShelterEntity, (shelter: ShelterEntity) => shelter.id, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  shelterId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: number;

  constructor() {}
}