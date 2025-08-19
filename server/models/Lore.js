import mongoose from "mongoose";
const LoreSchema = new mongoose.Schema({
  title: String,
  bio: [String]
});
export default mongoose.model("Lore", LoreSchema);