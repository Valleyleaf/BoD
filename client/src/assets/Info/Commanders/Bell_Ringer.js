const Bell_Ringer = {
  "id": 6,
  "name": "Mephisto",
  "title": "Bell Ringer",
  "difficulty": 2,
  "slug": "bell-ringer",
  "thumbnail": "https://i.imgur.com/SMTdZ1N.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/rgkDXJi.jpeg",
  "description": "Powerful duelist with strong debuff capabilities",
  "lore": "Rises to battle",
  "primaryStat": "Strength",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Inferno Crusade",
  "roles": [
    "Carry",
    "Melee",
    "Duelist"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Sinners Blade",
      "disc": "Striking a target slows them for a short duration and enables bonus effects for Mephisto's abilities.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Devour Life",
      "disc": "Steals a % amount of health from a targeted unit and refreshes the slow from Sinners Blade if already applied.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Salt the Wound",
      "disc": "Throws a bolt of hellfire at a target, reducing their armor. If the target is already slowed by Sinners Blade, it will also deal damage over time.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "",
      "disc": "",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "For Whom the Bell Tolls",
      "disc": "Mephisto rings his bell, opening the sky to rain down brimstone over a large area, dealing damage to all enemies inside.",
      "thumbnail": ""
    }
  ]
};
export default Bell_Ringer;
