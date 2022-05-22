import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User } from '../../domain/entities';
import { AuthService, UserService } from '../../domain/services';
import { JwtAuthGuard, LocalAuthGuard } from '../../infra/security';

@Controller('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get(':id')
  async getUserByID(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async getHello(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }
}
