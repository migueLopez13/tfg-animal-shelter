import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_phone')
export class UserPhoneEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.phone)
  user: UserEntity;

  @Column()
  country_code: string;

  @Column()
  phone: string;
}
