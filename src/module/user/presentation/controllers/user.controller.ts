import { CreateUserDTO, UpdateUserDTO, CreateAddressDTO, SearchAddressDTO } from '../dto';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Delete,
  Request,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User, Address } from '../../domain/entities';
import {
  AuthService,
  UserService,
  AddressService,
} from '../../domain/services';
import { JwtAuthGuard, LocalAuthGuard } from '../../infra/security';

@Controller('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async getCreateUser(@Body() user: CreateUserDTO) {
    return await this.userService.create(user as User);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserByID(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() user: UpdateUserDTO) {
    let userEntity = user as User;
    userEntity.id = id;
    await this.userService.update(userEntity);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/address')
  async createAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() address: CreateAddressDTO,
  ) {
    let addressEntity = address as Address;
    addressEntity.userId = id;
    return await this.addressService.create(addressEntity);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':userId/address/:id')
  async updateAddress(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() address: CreateAddressDTO,
  ) {
    let addressEntity = address as Address;
    addressEntity.id = id;
    addressEntity.userId = userId;
    return await this.addressService.update(addressEntity);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('address/:id')
  async deleteAddress(
    @Param('id', ParseIntPipe) id: number,
  ) {
    
    return await this.addressService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/address')
  async getAddress(
    @Param('id', ParseIntPipe) id: number,
    @Query() search: SearchAddressDTO,
  ) {    
     let addressEntity = search as Address;
     addressEntity.userId = id;
    return await this.addressService.get(addressEntity);
  }
}
