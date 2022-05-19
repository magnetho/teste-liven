import { User } from './user.entity';
export class Address {
  id: number;
  adress: string;
  city: string;
  zipCode: string;
  country: string;
  user: User;
}
