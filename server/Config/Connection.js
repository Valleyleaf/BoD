import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const uri = process.env.ATLAS_URI;

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000, // 45 second socket timeout
    });
    console.log("Serverside Connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    console.error("Full error:", err);
    process.exit(1);
  }
};
//Does connect y or n. Then goes to models.