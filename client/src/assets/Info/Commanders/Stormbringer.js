import StormbringerBio from '../LoreSheets/StormbringerBio.json';

const Stormbringer = {
  "id": 57,
  "name": "Jarvis Thunderbolt",
  "title": "Stormbringer",
  "difficulty": 3,
  "slug": "stormbringer",
  "thumbnail": "https://i.imgur.com/IvUamHu.jpeg",
  "image": "https://i.imgur.com/kJe1mKf.jpeg",
  "description": "",
  "lore": StormbringerBio,
  "primaryStat": "Agility",
  "stats": [
    ""
  ],
  "faction": "Mechanisms",
  "roles": [
    ""
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Northen Winds",
      "disc": "The Stormbringer gains bonuses depending on the last ability he used.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Lightning Strike",
      "disc": "Deals damage to a single target based on the Stormbringers Agility.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "To the Skies",
      "disc": "The Stormbringer takes flight, becoming untargetable from melee attacks and allows for travel over terrain.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Lightning Rod",
      "disc": "The Stormbringer throws down a hammer, granting bonus attack speed to all nearby allied units.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Eye of the Storm",
      "disc": "The Stormbringer calls the storm, creating a cloud that follows him. The cloud deals damage to all nearby enemy units and will occationally strike a random enemy unit for additional damage.",
      "thumbnail": ""
    }
  ]
};
export default Stormbringer;
