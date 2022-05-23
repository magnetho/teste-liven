import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';
export class UpdateUserDTO {
  @IsString() 
  @IsOptional()
  @IsNotEmpty() 
  name: string;
  @IsOptional()
  @IsEmail()
  email: string; 
  @IsOptional()
  @IsNotEmpty()
  password: string;
}
