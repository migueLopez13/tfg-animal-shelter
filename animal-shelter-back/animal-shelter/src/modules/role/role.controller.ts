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
import { RoleDTO } from '../../shared/domain/dto/role.dto';
import { RoleService } from './role.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RoleService) {}

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
