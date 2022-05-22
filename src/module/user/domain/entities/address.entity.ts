import { User } from './user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity('Address')
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
  @Column()
  userId: number;
  @ManyToOne((type) => User, (user) => user.address, {
    nullable: false,
  })
  user: User;
}
