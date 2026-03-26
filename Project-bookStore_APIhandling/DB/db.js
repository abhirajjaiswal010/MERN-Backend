import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const mongoURI = process.env.DB_URL;

export const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB is connected ✅");
  } catch (e) {
    console.error("Mongo DB connection failed ❌", e);
    process.exit(1);
  }
};