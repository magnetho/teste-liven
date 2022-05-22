import { AddressRepository } from './../../infra/repositories/Address.repository';
import { User } from './../entities';
import { UserRepository } from '../../infra/repositories/user.repository';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  async create(user: User) {
    const result = await this.userRepository.getByEmail(user.email);
    if (!result) return await this.userRepository.create(user);
    throw new BadRequestException('Email cadastrado já existe!');
  }
  async getByEmail(email: string) {
    return await this.userRepository.getByEmail(email);
  }

  async getById(id: number) {
    const result = await this.userRepository.getById(id);
    result.address = await this.addressRepository.getByUserId(id);
    return result;
  }
}
