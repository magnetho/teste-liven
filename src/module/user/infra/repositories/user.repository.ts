import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async create(user: User) {
    return await this.userRepository.save(user);
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({email});
  }

  async getById(id: number) {
    return await this.userRepository.findOne({
      where: { id: id }     
    });
  }
}
