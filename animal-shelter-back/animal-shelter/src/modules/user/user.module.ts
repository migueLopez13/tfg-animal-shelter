import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { User } from '../../shared/database/entities/user.entity';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
