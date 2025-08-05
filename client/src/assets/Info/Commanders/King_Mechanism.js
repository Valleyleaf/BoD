import KingMechanismBio from '../LoreSheets/KingMechanismBio.json'

const King_Mechanism = {
  "id": 33,
  "name": "Van",
  "title": "King Mechanism",
  "difficulty": 2,
  "slug": "king-mechanism",
  "thumbnail": "https://i.imgur.com/ZyntEya.png",
  "image": "https://i.imgur.com/nanoexS.jpeg",
  "description": "Brawler who enhances allied units in combat.",
  "lore": KingMechanismBio,
  "primaryStat": "Strength",
  "stats": [
    "18+(2.3)",
    "16+(2.0)",
    "14+(1.7)",
  ],
  "faction": "Mechanism",
  "roles": [
    "Tank",
    "Support",
    "Brawler",
    "Melee"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Grip of the Tyrant",
      "disc": "Causes nearby enemy units to lose armour.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Authority",
      "disc": "Van strikes true with his hammer, dealing AoE damage ontop of his normal attacks. This is a toggle ability.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Hand of the King",
      "disc": "Sends down a bolt of holy light at a global range. The target allied hit is healed, along with all adjacent allied units.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Make Way",
      "disc": "Van leaps into the air, bringing the might of his hammer down at a target location, dealing damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "For your King",
      "disc": "Summons two Royal guardsmen to fight alongside Van. The guardsmen have true sight, deal chaos damage and have divine armor.",
      "thumbnail": ""
    }
  ]
};
export default King_Mechanism;
