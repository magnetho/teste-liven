import { AddressDTO } from './address.dto';

export class UserDTO {
  id: number;
  name: string;
  email: string;
  address: AddressDTO[];
}
