const Bounty_Huntress = {
  "id": 10,
  "name": "Laura Fangwin",
  "title": "Bounty Huntress",
  "difficulty": 5,
  "slug": "bounty-huntress",
  "thumbnail": "https://i.imgur.com/2Nqe2mz.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/tb5bc8O.jpeg",
  "description": "Fierce carry who strikes together with a animal companion and gains bonus gold from kills.",
  "lore": "Unstoppable force",
  "primaryStat": "Agility",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "League of Valor",
  "roles": [
    "Carry",
    "Ranged"
  ],
  "abilities": [
      {
      "abilityid": 6,
      "name": "Smokey (Innate)",
      "disc": "The Bounty Huntress has a animal companion named Smokey. Smokey has his own stats, inventory and will cast abilities based on the actions of the Bounty Huntress.",
      "thumbnail": ""
    },
    {
      "abilityid": 0,
      "name": "Bounty Huntress",
      "disc": "The Bounty Huntress gains bonus gold and experience from kills.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Command: Kill",
      "disc": "Grants both the Bounty Huntress and Smokey bonus attack speed.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Wild Hunt",
      "disc": "Causes the Bounty Huntress and Smokey to stealth. Their next attack will deal bonus damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Vicious Strike",
      "disc": "The Bounty Huntress marks a target, silencing them and dealing damage over time. Smokey will then deliver a vicious strike, dealing true magic damage to the target.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Bean",
      "disc": "Summons Bean, the Bounty Huntress Raven. Bean will fly to the Bounty Huntress location and periodically mark enemy Commanders. Marked units grant bonus gold upon death.",
      "thumbnail": ""
    }
  ]
};
export default Bounty_Huntress;
