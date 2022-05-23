import { AddressRepository, UserRepository } from '../../infra/repositories';
import {  Address } from './../entities';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  async create(address: Address) {
    const result = await this.userRepository.getById(address.userId);
    if (result) return await this.addressRepository.create(address);
    throw new BadRequestException(`Não existe UserId:${address.userId}!`);
  }

  async update(address: Address) {
    await this.addressRepository.update(address);
  }

  async delete(id: number) {
    await this.addressRepository.delete(id);
  }

  async get(address: Address) {
    return await this.addressRepository.get(address);
  }
}
