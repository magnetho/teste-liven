import { AddressRepository } from './../../infra/repositories/addres.repository';

import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '../../infra/repositories';
import { UserService } from './user.service';
import { Address, User } from '../entities';
import { BadRequestException } from '@nestjs/common';

let address = new Address();
address.address = 'adfadaf';
address.city = 'new sp';
address.id = 1;
(address.userId = 1), (address.country = 'BRA');

let user = new User();
user.email = 'teset@testem';
user.id = 1;
user.name = 'testes';
user.password = '123';
user.address = [address];

describe('User service', () => {
  let userRepository: UserRepository;
  let addressRepository: AddressRepository;
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(user.id),
            update: jest.fn(),
            delete: jest.fn(),
            getByUserId: jest.fn().mockResolvedValue(user),
            getByEmail: jest.fn().mockResolvedValue(null),
          },
        },

        {
          provide: AddressRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(address),
            update: jest.fn(),
            delete: jest.fn(),
            get: jest.fn().mockResolvedValue([address]),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
    addressRepository = module.get<AddressRepository>(AddressRepository);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(addressRepository).toBeDefined();
  });

  describe('create User', () => {
    it('should create a new user item successfully', async () => {
      const result = await userService.create(user);
      expect(result).toEqual(user.id);
    });

    it('cannot saved email duplicate', async () => {

        jest.spyOn(userRepository, 'getByEmail').mockResolvedValueOnce(user);       
        expect(userService.create(user)).rejects.toThrowError( new BadRequestException());
      });
    
    
  });
});
