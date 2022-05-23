import {  IsNotEmpty, IsOptional } from 'class-validator';
export class CreateAddressDTO { 
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  @IsOptional()
  city: string;
  @IsNotEmpty()
  @IsOptional()
  zipCode: string;
  @IsNotEmpty()
  @IsOptional()
  country: string;
}
