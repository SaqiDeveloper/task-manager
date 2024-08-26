import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  dueDate: string;

  @Prop()
  userId: string;
}

export const taskSchema = SchemaFactory.createForClass(Task);
