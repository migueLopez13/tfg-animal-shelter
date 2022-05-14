import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { UsersMapper } from '../user/user.mapper';
import { UsersModule } from '../user/user.module';
import { UsersService } from '../user/user.service';
import { RoleEntity } from './entities/role.entity';
import { RolesController } from './role.controller';
import { RolesMapper } from './role.mapper';
import { RoleService } from './role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
    forwardRef(() => UsersModule),
  ],
  controllers: [RolesController],
  providers: [RoleService, RolesMapper],
})
export class RoleModule {}
