const Black_Clown = {
  "id": 8,
  "name": "Dollar",
  "title": "Black Clown",
  "difficulty": 4,
  "slug": "black-clown",
  "thumbnail": "https://i.imgur.com/cp64uNs.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/bl6F9ZQ.png",
  "description": "Elusive assassin with the ability to confuse enemies and deal massive damage",
  "lore": "Quick and precise",
  "primaryStat": "Agility",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "The Abyss",
  "roles": [
    "Carry",
    "Melee",
    "Assassin"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Better together",
      "disc": "Causes the Black Clowns Mimic to deal bonus chaos damage on attacks if it stands close to him.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Mimic",
      "disc": "Summons a clone of the Black Clown at a target location. The Black Clown can detonate the clone, dealing damage to nearby enemies.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Stab from the Dark",
      "disc": "The Black Clown inhibits the shadow of a target unit. He can then teleport to a target unit. If the target is an enemy, he will deal damage based on their missing health.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Deceive",
      "disc": "The Black Clown switches places with his Mimic, confusing enemies. The Black Clown can cast this ability on himself to pretend to cast this ability.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Shadow Counter",
      "disc": "Marks a enemy unit with a shadow counter. Each time the target is attacked by the Black Clown or a Mimic, the counter will increase, dealing damage at the end of it's duration depending on the amount of stacks accrued",
      "thumbnail": ""
    }
  ]
};
export default Black_Clown;
