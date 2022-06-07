import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, BeforeInsert, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Entity('user-credential')
export class UserCredential extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.userCredential)
  @JoinColumn()
  user: User;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}