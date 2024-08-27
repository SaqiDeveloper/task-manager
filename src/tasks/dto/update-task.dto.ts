import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsString, Length, IsDate } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @Length(3, 255) // Adjust length constraints as needed
  name: string;
  @IsString()
  @Length(5, 255) // Adjust length constraints as needed
  desc: string;
  @IsDate()
  dueDate: string;
  @IsString()
  assignTo: string;
}
