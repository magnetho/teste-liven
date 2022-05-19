import { User } from './user.entity';
export class Address {
  id: number;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  user: User;
}
