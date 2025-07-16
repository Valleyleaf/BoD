import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  stats: [String],
  type: String //Strength, Agility, Intelligence, Utility, Boots, etc.
});
export default mongoose.model("Item", ItemSchema);