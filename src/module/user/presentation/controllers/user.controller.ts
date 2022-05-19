import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../../domain/entities';
import { UserService } from '../../domain/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async getHello(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }
}
