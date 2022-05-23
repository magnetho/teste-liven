import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
