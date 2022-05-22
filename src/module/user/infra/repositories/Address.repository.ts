import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../../domain/entities';

@Injectable()
export class AddressRepository {
  constructor(  
    @Inject('ADDRESS_REPOSITORY')    
    private addressRepository: Repository<Address>,
  ) {}
  async create(address: Address) {
    return await this.addressRepository.save(address);
  }

  async getByUserId(userId:number){
    return await this.addressRepository.find({ userId });
  }
  
}
