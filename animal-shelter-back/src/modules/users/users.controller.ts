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
    return 'return all users';
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return "return shelter with this id";
  }

  @Post()
  private insert(@Body(ValidationPipe) user: UserDTO) {
    return "add user";
  }

  @Put()
  private update(@Body(ValidationPipe) user: UserDTO) {
    return "update user";
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return "delete user";
  }
}