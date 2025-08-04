const Berserker = {
  "id": 7,
  "name": "Keil Bearswarm",
  "title": "Berserker",
  "difficulty": 3,
  "slug": "berserker",
  "thumbnail": "https://i.imgur.com/vN2ohzh.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/KH6wTpt.jpeg",
  "description": "Tank with the ability to shrug off crowd control effects",
  "lore": "Faces the unknown",
  "primaryStat": "Strength",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "The Green Order",
  "roles": [
    "Tank",
    "Melee"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Dashing Blow",
      "disc": "Causes the Berserker to have a small chance to stun a target on hit.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "On the Hunt",
      "disc": "Throws an axe at a target, dealing damage and stunning them for a short duration. The Berserker also gains a large amount of movement speed.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Rules of Nature",
      "disc": "Actively grants bonus armor to all nearby allied units. Additionally, upon dropping below a % health threshhold, the Berserker gains bonus life steal.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Rip and Tear",
      "disc": "Deals bonus Damage over time to targets struck",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Blood of the Giants",
      "disc": "Grants bonus base health and complete magic resistance for a set duration.",
      "thumbnail": ""
    }
  ]
};
export default Berserker;
