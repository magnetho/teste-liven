import { ApiProperty } from '@nestjs/swagger';
import { IsEmail,IsNotEmpty } from 'class-validator';
export class LoginUserDTO {
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
