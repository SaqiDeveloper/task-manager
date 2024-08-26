import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { taskSchema } from '../schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: taskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
