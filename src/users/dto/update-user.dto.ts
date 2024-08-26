import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @Length(1, 50) // Adjust length constraints as needed
  name: string;
  @IsEmail()
  @Length(5, 20) // Adjust length constraints as needed
  email: string;
  @IsString()
  @Length(4, 10) // Adjust length constraints as needed (e.g., minimum 6 characters for password)
  password: string;
}
