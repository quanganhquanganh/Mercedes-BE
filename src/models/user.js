import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('User', userSchema);
