import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.DB_URL;
import mongoose from "mongoose";
import chalk from "chalk"
export const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log(chalk.green("MongoDB is connected ✅"));
  } catch (e) {
    console.error("Mongo DB connection failed ❌", e);
    process.exit(1);
  }
};
