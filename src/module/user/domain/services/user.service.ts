import { User } from'./../entities';
import { UserRepository } from './../../data/repositories/user.repository';
import { Injectable } from '@nestjs/common';

Injectable();
export class UserService {
  constructor(private UserRepository: UserRepository) {}

  async create(user:User) {
    return this.UserRepository.create(user);
  }
}
