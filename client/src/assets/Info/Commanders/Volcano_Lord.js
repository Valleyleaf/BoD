import VolcanoLordBio from '../LoreSheets/VolcanoLordBio.json';

const Volcano_Lord = {
  "id": 59,
  "name": "Mul'Vin",
  "title": "Volcano Lord",
  "difficulty": 3,
  "slug": "volcano-lord",
  "thumbnail": "",
  "image": "https://i.imgur.com/FeKrgBU.jpeg",
  "description": "",
  "lore": VolcanoLordBio,
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Inferno Crusade",
  "roles": [
    "Mage",
    "Siege"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Collateral Damage",
      "disc": "Upon attacking, the Volcano Lord leaves behind a small area of fire that deals damage over time to enemy units and buildings.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Focus Point",
      "disc": "After a short channel, the Volcano Lord deals AoE damage at a target location and leaves behind flames that deal damage over time to enemy units and buildings.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Spontanious Combustion",
      "disc": "Deals damage in an AoE around the Volcano Lord.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Scorched Earth",
      "disc": "The Volcano Lord dashes forward, dealing damage to all enemy units in his path.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Burning Rage",
      "disc": "Sends out waves of molten rocks in a large AoE. Enemy units and buildings hit by the waves take damage.",
      "thumbnail": ""
    }
  ]
};
export default Volcano_Lord;
