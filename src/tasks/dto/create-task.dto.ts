import { IsString, Length, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(3, 255)
  name: string;
  @IsString()
  @Length(5, 255)
  desc: string;
  @IsDate()
  dueDate: string;
  @IsString()
  userId: string;
  @IsString()
  assignTo: string;
}
