import * as mongoose from "mongoose";
import db from "../db";

const { Schema } = mongoose;
const { Types } = Schema;

export interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  phone: number;
  password: string;
  data?: [string];
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  data: [
    {
      type: Types.Mixed,
      default: [],
    },
  ],
});

export const UserModelName = "crudUser";
export const userModel = db.model<IUserModel>(UserModelName, UserSchema as any);
