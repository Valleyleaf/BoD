import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    id: {
      type: Number, // Replaces DataTypes.INTEGER
      required: true, // Replaces allowNull: false
      unique: true,   // Mimics primaryKey functionality
      autoIndex: true, // Mimics autoIncrement (MongoDB automatically generates unique IDs)
    },
    name: {
      type: String, 
      required: true, 
    },
    title: {
      type: String, 
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    thumbnailAlt: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    lore: {
      type: String,
    },
    primaryStat: {
      type: String,
      required: true,
    },
    stats: {
      type: [String], 
      default: ["Null"],   
    },
    faction: {
      type: String,
    },
    roles: {
      type: [String], 
      default: ["Null"],
    },
    ability0: {
      type: String,
    },
    ability1: {
      type: String,
    },
    ability2: {
      type: String,
    },
    ability3: {
      type: String,
    },
    ability4: {
      type: String,
    },
  },
  { timestamps: true } //Adds createdAt and updatedAt fields. Dunno if needed but guide said to do it.
);

const Unit = model('Unit', userSchema);

export default Unit;
