import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  // address: Address[];
}
