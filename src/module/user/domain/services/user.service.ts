import { AddressRepository, UserRepository } from '../../infra/repositories';
import { User } from './../entities';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  async create(user: User) {
    const userBb = await this.userRepository.getByEmail(user.email);
    if (!userBb) return await this.userRepository.create(user);

    throw new BadRequestException('Email cadastrado já existe!');
  }
  async getByEmail(email: string) {
    return await this.userRepository.getByEmail(email);
  }

  async getById(id: number) {
    const result = await this.userRepository.getById(id);
    result.address = await this.addressRepository.getByUserId(id);
    result.password = null;
    return result;
  }

  async update(user: User) {
    await this.userRepository.update(user);
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
  }
}
