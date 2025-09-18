import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  category: String,
  source: String,
  ability: Array,
  flavor: String,
  statGain: Array,
  image: String
});
export default mongoose.model("Item", ItemSchema);