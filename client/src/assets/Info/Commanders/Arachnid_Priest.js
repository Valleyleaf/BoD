const Arachnid_Priest = {
  "id": 4,
  "name": "Naze",
  "title": "Arachnid Priest",
  "difficulty": 2,
  "slug": "arachnid-priest",
  "thumbnail": "https://i.imgur.com/IvUamHu.jpeg",
  "image": "https://i.imgur.com/IvUamHu.jpeg",
  "description": "A cunning mage with strong damage over time abilities",
  "lore": "",
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Void Whisperers",
  "roles": [
    "Ranged",
    "Mage",
    "Support"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Spiders Sting",
      "disc": "Upon attacking, deals damage over time to a target enemy unit.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Ritual of Birth",
      "disc": "Infests a target with a spider egg, dealing damage over time. If the target dies while infested, a Transmuted trap will spawn.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Transmuted Trap",
      "disc": "Creates a trap that stays in place. If an enemy unit steps near it, it will slash at them, applying a long lasting poison that deals damage over time.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Envenomed Web",
      "disc": "Tosses a ball of web at a target enemy unit, dealing damage over time and snaring them.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Anti-Life",
      "disc": "Reduces the attack speed, movement speed and armor of a target enemy unit by a large amount for a short duration.",
      "thumbnail": ""
    }
  ]
};
export default Arachnid_Priest;
