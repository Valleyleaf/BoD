import LightbringerBio from '../LoreSheets/LightbringerBio.json';

const Lightbringer = {
  "id": 34,
  "name": "Tyrus",
  "title": "Lightbringer",
  "difficulty": 5,
  "slug": "lightbringer",
  "thumbnail": "https://i.imgur.com/9bghiaH.png",
  "image": "https://i.imgur.com/CyCzT9Y.jpeg",
  "description": "",
  "lore": LightbringerBio,
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": " ",
  "roles": [
    ""
  ],
  "abilities": [
      {
      "abilityid": 5,
      "name": "Light Image",
      "disc": "Creates a Light Image at a target location. Tyrus can control up to 5 Light Images at once.",
      "thumbnail": ""
    },
    {
      "abilityid": 0,
      "name": "Hand of Salvation",
      "disc": "Heal's a target allied unit at a global range. If the target is a Light Image, it will dissapate.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Smite",
      "disc": "Deals damage to a target enemy unit and debuffs it for a short duration. Units with the Smite Debuff take double damage from additional Smites.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Eye of the Light",
      "disc": "Grants vision of a target area for a short duration and summons a Light Image.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Blinding Light",
      "disc": "Douses a target in holy light, blinding them and dealing damage over time.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Holy Light Regalia",
      "disc": "Allows the Lightbringer to teleport to a target Light Image, granting him invurnability for a short duration. Upon teleporting, the Light Image is destroyed.",
      "thumbnail": ""
    }
  ]
};
export default Lightbringer;
