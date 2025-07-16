import GoldenConquerorLore from '../LoreSheets/GoldenConquerorBio.json';

const Golden_Conqueror = {
  "id": 26,
  "name": "Pulveris",
  "title": "Golden Conqueror",
  "difficulty": 3,
  "slug": "golden-conqueror",
  "thumbnail": "https://static.wikia.nocookie.net/wowpedia/images/3/36/Achievement_firelands_raid_ragnaros.png/revision/latest?cb=20180218133809",
  "image": "https://i.imgur.com/R9YP6fC.jpeg",
  "description": "Casting duelist who gains bonuses the more spells he casts.",
  "lore": GoldenConquerorLore,
  "primaryStat": "Agility",
  "stats": [
    "10",
    "10",
    "10",
  ],
  "faction": "League of Valor",
  "roles": [
    "Carry",
    "Duelist",
    "Caster"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "End of Kin",
      "disc": "Applies a stacking damage over time effect upon attack.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Plaguebringer",
      "disc": "Sends out a cursed bolt of energy, dealing damage to a single target hit.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Shattering Strike",
      "disc": "The Golden Conqueror strikes a target enemy unit, dealing % health damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Mania",
      "disc": "Upon striking a enemy unit, the Golden Conqueror gains a stack of Mania. Each stack grants bonus movement speed up to a cap.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Rise my Kingdom",
      "disc": "The Golden Conqueror summons a ring of gladiators around him. Enemy units that go near the gladiators are tossed into the centre of the pit and are stunned for a short duration. Upon activation, the Golden Conqueror gains full stacks of Mania.",
      "thumbnail": ""
    }
  ]
};
export default Golden_Conqueror;
