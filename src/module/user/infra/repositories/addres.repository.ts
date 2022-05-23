import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Address } from '../../domain/entities';

@Injectable()
export class AddressRepository {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async create(address: Address) {
    return (await this.addressRepository.save(address)).id;
  }

  async update(address: Address) {
    return await this.addressRepository.update(address.id, address);
  }
  async delete(id: number) {
    return await this.addressRepository.delete(id);
  }

  async getByUserId(userId: number) {
    return await this.addressRepository.find({ userId });
  }

  async get(address: Address) {
    return await this.addressRepository.find(address);
  }
}
