import { IsEmail, IsNotEmpty } from 'class-validator';
export class AddressDTO {
  id: number;
  userId:number;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}
