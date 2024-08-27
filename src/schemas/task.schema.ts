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

  @Prop({ default: null })
  assignTo: string;

  @Prop({ default: 'pending' })
  status: string;
}

export const taskSchema = SchemaFactory.createForClass(Task);
