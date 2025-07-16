import mongoose from "mongoose";
const CommanderSchema = new mongoose.Schema({
  name: String,
  title: String,
  slug: String,
  difficulty: Number,
  thumbnail: String,
  image: String,
  description: String,
  lore: String,
  primaryStat: String,
  stats: [String],
  faction: String,
  roles: [String],
  abilities: [
    {
      abilityid: Number,
      name: String,
      disc: String,
      thumbnail: String
    }
  ]
});
export default mongoose.model("Commander", CommanderSchema);

//Make sure lore gets returned as as a string cause it might be an object.