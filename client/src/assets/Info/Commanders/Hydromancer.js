const Hydromancer = {
  "id": 32,
  "name": "X",
  "title": "Hydromancer",
  "difficulty": 3,
  "slug": "hydromancer",
  "thumbnail": "https://i.imgur.com/RPqwsiQ.png",
  "image": "https://i.imgur.com/cLjGBfT.jpeg",
  "description": "",
  "lore": "N/A",
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "The Green Order",
  "roles": [
    "Mage",
    "Support",
    "Siege"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Hydromancy",
      "disc": "The Hydromancer's basic attacks deal damage based on both his Intelligence and Agility.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Aquatic Bolt",
      "disc": "Deals damage to a target enemy unit. If the target is a summoned unit, it will be healed after the damage is dealt.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Summon Water Elemental",
      "disc": "Summons one or later two Water Elementals. The Hydromancer can control multible instances of these elementals at once.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Reflect",
      "disc": "Summons a mirror image of a target unit. If the target is a summoned unit, it gains bonus armor",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Pact of the Deep",
      "disc": "Grants a target summoned unit increased attack speed and resets all of the Hydromancers cooldowns.",
      "thumbnail": ""
    }
  ]
};
export default Hydromancer;
