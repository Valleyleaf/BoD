import MercysHandBio from '../LoreSheets/MercysHandBio.json';

const Mercy_s_Hand = {
  "id": 37,
  "name": "Maelstrom",
  "title": "Mercy's Hand",
  "difficulty": 2,
  "slug": "mercys-hand",
  "thumbnail": "https://i.imgur.com/nazlTUp.png",
  "image": "https://i.imgur.com/rxL3se5.jpeg",
  "description": "",
  "lore": MercysHandBio,
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Mechanisms",
  "roles": [
    "Support"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Blessed Touch",
      "disc": "",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Monsoon",
      "disc": "Creates a centeralized storm at a target area, dealing repeating damage to all enemy units in the area. This is a channeled ability.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Hand of Mercy",
      "disc": "Heal an allied unit or damage a enemy unit.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Insight",
      "disc": "Causes an allied unit to regain mana over time.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Metabolism",
      "disc": "Calls down healing rain in a large area, healing all allied units in the area.",
      "thumbnail": ""
    }
  ]
};
export default Mercy_s_Hand;
