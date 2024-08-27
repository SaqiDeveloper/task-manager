import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '../schemas/task.schema';
@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: mongoose.Model<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const user = await this.taskModel.create(createTaskDto);
    return user;
  }
  async findAll(userId: any) {
    const users = await this.taskModel.find({
      $or: [{ userId: userId }, { assignTo: userId }],
    });
    return users;
  }

  async findOne(id: string) {
    const user = await this.taskModel.findById(id);
    return user;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const user = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, {
      new: true,
      runValidators: true,
    });
    return user;
  }

  async remove(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
