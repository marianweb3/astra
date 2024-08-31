import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB;

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
}