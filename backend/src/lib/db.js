import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const x = process.env.MONGODB_URI;
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongo Connection error: " + error);
  }
};
