import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  @Get()
  getUsers(): string[] {
    return ['thrse', 'are', 'sample', 'strings'];
  }

  @Get(':id')
  getUserById(@Param('id') id: string): string {
    return `User with id: ${id}`;
  }
  @Post()
  createUser(@Body() user: CreateUserDto): string {
    return `User, name: ${user.username}, deparmtent Key:  ${user.departmentKey} `;
  }
}
