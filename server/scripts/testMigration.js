import { connectDB } from "../Config/Connection.js";
import Commander from "../models/Commanders.js";

// Simple test data to verify the connection works
const testCommander = {
  "name": "Test",
  "title": "Test",
  "difficulty": 9,
  "slug": "test",
  "thumbnail": "https://i.imgur.com/LEHMy99.png",
  "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.free3d.com%2Fimg%2F2018%2F12%2F2174897720555209775%2Flvuf5q01.jpg&f=1&nofb=1&ipt=b6f8851babe846cec03f156dc3b38a61340eb831aa2c3dfa7977620e6a20c418",
  "description": "Elusive support with strong offensive capabilities",
  "lore": "N/A",
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Gaia's Guard",
  "roles": [
    "Support",
    "Ranged",
    "Mage"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Eternal Form",
      "disc": "Upon dropping below a % threshold of health, the Aspect will turn etherial.",
      "thumbnail": ""
    }
  ]
};

async function migrateTestCommander() {
  try {
    await connectDB();
    
    // Clear existing data
    await Commander.deleteMany({});
    console.log("Cleared existing commanders");
    
    // Insert test commander
    const commander = new Commander(testCommander);
    await commander.save();
    console.log("Test commander inserted successfully");
    
    // Verify it was inserted
    const count = await Commander.countDocuments();
    console.log(`Total commanders in database: ${count}`);
    
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

migrateTestCommander();
