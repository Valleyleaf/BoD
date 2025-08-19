import mongoose from "mongoose";
const LoreSchema = new mongoose.Schema({
  bio: [String]
});
export default mongoose.model("Lore", LoreSchema);