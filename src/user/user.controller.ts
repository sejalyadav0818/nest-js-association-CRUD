import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/craeate-user')
  createnewUser(@Body() userDto: UserDto) {
    try {
      return this.userService.createUser(userDto);
    } catch (error) {
      throw error;
    }
  }
}
