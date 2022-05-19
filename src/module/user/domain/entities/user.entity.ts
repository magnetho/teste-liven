import { Address } from './address.entity';
export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  address: Address[];
}
