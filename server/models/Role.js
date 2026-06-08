import mongoose from "mongoose";
const RoleSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  ExampleCharacters: [String]
});
export default mongoose.model("Role", RoleSchema);