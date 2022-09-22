import mongoose, { Schema, Document } from "mongoose";

const userSchema: Schema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  _id: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserDb", userSchema);
