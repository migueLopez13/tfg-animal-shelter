import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { RoleDTO } from 'src/shared/domain/dto/role.dto';
import { RolesService } from './role.service';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) { }

  @Get()
  private find() {
    return this.roleService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.roleService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) role: RoleDTO) {
    return this.roleService.insert(role);
  }

  @Put()
  private update(@Body(ValidationPipe) role: RoleDTO) {
    return this.roleService.update(role);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.roleService.delete(params);
  }
}
