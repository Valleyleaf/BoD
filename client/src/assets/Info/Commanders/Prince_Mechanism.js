import PrinceMechanismBio from '../LoreSheets/PrinceMechanismBio.json'

const Prince_Mechanism = {
  "id": 44,
  "name": "Edgarim",
  "title": "Prince Mechanism",
  "difficulty": 2,
  "slug": "prince-mechanism",
  "thumbnail": "",
  "image": "https://i.imgur.com/c0z1zHt.jpeg",
  "description": "Powerful disruptive brawler who can control the battlefield and pick off high priority targets.",
  "lore": PrinceMechanismBio,
  "primaryStat": "Strength",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Mechanisms",
  "roles": [
    "Brawler",
    "Melee",
    "Disruptor"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Legacy",
      "disc": "Upon death, Edgarim slams his hammer into the ground, dealing damage to all nearby enemy units based on his Max Health.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "",
      "disc": "",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Declaration of Peace",
      "disc": "Edgarim declares a temporary ceasefire, disarming enemy units in an AoE.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "",
      "disc": "",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Unstable Thermonuclear Warhammer",
      "disc": "The Prince Mechanism charges his warhammer with unstable energy. His next attack deals massive damage to all enemies, and himself in a large area around him.",
      "thumbnail": ""
    }
  ]
};
export default Prince_Mechanism;
