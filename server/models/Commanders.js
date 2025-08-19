import mongoose from "mongoose";

const CommanderSchema = new mongoose.Schema({
  name: String,
  title: String,
  slug: String,
  difficulty: Number,
  thumbnail: String,
  image: String,
  description: String,
  lore: { type: mongoose.Schema.Types.ObjectId, ref: "Lore" },
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

//Blueprint for how the data is returned via routes.