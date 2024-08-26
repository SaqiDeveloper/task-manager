import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
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
