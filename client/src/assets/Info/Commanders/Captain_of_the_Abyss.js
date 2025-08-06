const Captain_of_the_Abyss = {
  "id": 11,
  "name": "Miranda Chance",
  "title": "Captain of the Abyss",
  "difficulty": 4,
  "slug": "captain-of-the-abyss",
  "thumbnail": "https://i.imgur.com/ogLSQRk.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/AWMvzoM.jpeg",
  "description": "Tricky caster with powerful area control abilities. Can summon a ship to aid her in battle.",
  "lore": "Weaves powerful magic",
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "The Abyss",
  "roles": [
    "Carry",
    "Ranged",
    "Caster"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Lost Souls",
      "disc": "Upon killing a unit, it leaves behind a Lost Soul. The Soul will lash out against nearby enemy units, dealing damage. The lost Soul will remain as long as it has a target to attack.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Curse of the Deep",
      "disc": "Targets an enemy unit. After a short delay, the Captain of the Abyss deals AoE damage around the target. If the target is a normal unit, she deals double damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Kraken's Cage",
      "disc": "Summons a ring of tentacles at a target location. The tentacles will attack any nearby enemy units.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Keelhaul'Em",
      "disc": "Selects two units and drags them towards each other, dealing damage and stunning them briefly.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "The Tide Killer",
      "disc": "Summons the Tide Killer, a powerful ship that can attack enemy units in its vicinity. The ship will level with the Captain of the Abyss and gain additional abilities as it does.",
      "thumbnail": ""
    }
  ]
};
export default Captain_of_the_Abyss;
