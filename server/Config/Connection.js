import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const uri = process.env.ATLAS_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Serverside Connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};
//Does connect y or n. Then goes to models.