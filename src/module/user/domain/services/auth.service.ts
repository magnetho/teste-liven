import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../infra/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly  userRepository: UserRepository
  ) {}

  async validateUser(email: string, password: string){
    const user = await this.userRepository.getByEmail(email);
    if (user && user.password === password) {
       user.password = null;
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
