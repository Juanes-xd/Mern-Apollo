import mongoose from "mongoose";
import { MONGODB } from "./config.js";

export const connectDB = async () => {
  try {
    const conexion = await mongoose.connect(MONGODB);
    console.log(`Mongo is connected ${conexion.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
