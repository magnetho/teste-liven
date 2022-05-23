import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
