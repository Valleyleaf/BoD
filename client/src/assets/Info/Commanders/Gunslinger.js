import GunslingerBio from '../LoreSheets/GunslingerBio.json';

const Gunslinger = {
  "id": 27,
  "name": "Jurvin Brownbeard",
  "title": "Gunslinger",
  "difficulty": 1,
  "slug": "gunslinger",
  "thumbnail": "https://i.imgur.com/dk90S5P.png",
  "image": "https://i.imgur.com/Tsc3tyM.jpeg",
  "description": "High damage ranged carry with the ability to deal massive damage to single targets.",
  "lore": GunslingerBio,
  "primaryStat": "Agility",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Mechanisms",
  "roles": [
    "Carry",
    "Ranged"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Weapon Mastery",
      "disc": "Grants bonus attributes.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Rivet Shot",
      "disc": "Fires a large caliber round at a target, dealing damage and stunning it.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Scatter Shot",
      "disc": "Causes the Gunslinger to strike multible targets on attack.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Camp",
      "disc": "Places a camp at a target location. The Gunslinger can jump into the camp to gain stealth. Upon exiting the tent, he gains a guaranteed critical strike on his next attack.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Bison Breaker",
      "disc": "Deals damage in a large AoE in a target global area.",
      "thumbnail": ""
    }
  ]
};
export default Gunslinger;
