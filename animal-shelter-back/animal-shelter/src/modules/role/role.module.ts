import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/shared/database/entities/role.entity';
import { RolesController } from './role.controller';
import { RolesService } from './role.service';



@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RoleModule { }
