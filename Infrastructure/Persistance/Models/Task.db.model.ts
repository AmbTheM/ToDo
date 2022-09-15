import mongoose, { Schema, Document } from "mongoose";

const taskSchema: Schema = new Schema({
  TaskName: {
    type: String,
    required: true,
  },
  TaskDescription: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
  },
  Deadline: {
    type: Date,
    required: true,
  },
  FinishedAt: {
    type: Date,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
});

export default mongoose.model("TaskDb", taskSchema);
