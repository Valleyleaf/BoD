import FlameKingBio from '../LoreSheets/FlameKingBio.json';

const Flame_King = {
  "id": 22,
  "name": "Karl the Everburning",
  "title": "Flame King",
  "difficulty": 3,
  "slug": "flame-king",
  "thumbnail": "https://i.imgur.com/IvUamHu.jpeg",
  "image": "https://i.imgur.com/jT9hJUw.jpeg",
  "description": "Mystical mage with high base damage and area of effect abilities.",
  "lore": FlameKingBio,
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Inferno Crusade",
  "roles": [
    "Mage",
    "Caster",
    "Support"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Anarchy",
      "disc": "Periodically sends out a wave of fire that ignites a nearby enemy unit.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Heat Wave",
      "disc": "Sends out a orb of fire that deals damage to all enemy units in its path. Upon reaching it's location, the orb will linger, dealing additional damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Spirit Fire",
      "disc": "Snares a target enemy unit.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Molten Shield",
      "disc": "Surrounds a target unit with molten brimstone. The brimstone deals damage to nearby enemy units.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Cataclysm",
      "disc": "After channeling for a short duration, the Flame King unleashes a massive wave of fire in a large AoE, dealing massive damage to all enemy units caught in the blast.",
      "thumbnail": ""
    }
  ]
};
export default Flame_King;
