import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(
      `\n monodb connected successfully!! DB HOST: ${connectionInstance.connecton.host}`
    );
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
