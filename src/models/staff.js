import { Schema, model } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

import GenderEnum from '../constants/GenderEnum';
import ExpEnum from '../constants/ExpEnum';

const staffSchema = new Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true, // `email` must be unique
    },
    address: String,
    phone: Number,
    cookExp: {
      type: String,
      emum: Object.values(ExpEnum),
    },
    careExp: {
      type: String,
      emum: Object.values(ExpEnum),
    },
    gender: {
      type: String,
      emum: Object.values(GenderEnum),
    },
    birthday: Date,
    salary: Number,
    imageLink: String,
    userLanguage: [{ type: ObjectId, ref: 'Language', required: true }],
    rating: [
      {
        userId: { type: ObjectId, ref: 'Account', required: true },
        review: { type: String, required: true },
        star: {
          type: Number,
          min: 1,
          max: 5,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Staff', staffSchema);
