import { User } from './user.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
Entity('Address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  zipCode: string;
  @Column()
  country: string;
  user: User;
}
