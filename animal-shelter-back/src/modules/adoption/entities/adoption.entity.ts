import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsUUID, IsNotEmpty } from 'class-validator';
import { AnimalEntity } from '../../animal/entities/animal.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('adoptions')
export class AdoptionEntity {
  @IsUUID()
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @OneToOne(() => UserEntity, (UserEntity) => UserEntity.id)
  @IsNotEmpty()
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => AnimalEntity, (AnimalEntity) => AnimalEntity.id)
  @IsNotEmpty()
  @JoinColumn()
  animal: AnimalEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: number;
}
