import {
  Controller,
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  ValidationPipe 
} from '@nestjs/common';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  private find() {
    return this.usersService.find();
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return this.usersService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) user: UserDTO) {
    return this.usersService.insert(user);
  }

  @Put()
  private update(@Body(ValidationPipe) user: UserDTO) {
    return this.usersService.update(user);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.usersService.delete(params);
  }
}