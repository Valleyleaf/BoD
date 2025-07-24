import MasterEngineerBio from '../LoreSheets/MasterEngineerBio.json';

const Master_Engineer = {
  "id": 36,
  "name": "Jazz Wunderwaffle",
  "title": "Master Engineer",
  "difficulty": 3,
  "slug": "master-engineer",
  "thumbnail": "https://i.imgur.com/IvUamHu.jpeg",
  "image": "",
  "description": "",
  "lore": MasterEngineerBio,
  "primaryStat": "Intelligence",
  "stats": [
    ""
  ],
  "faction": "Mechanisms",
  "roles": [
    "Mage",
    "Support",
    "Siege"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Scrap",
      "disc": "Killing a unit has a chance to drop scrap. Upon collecting scrap, the Master Engineer can cast a upgraded version of one of his abilities.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Discharge",
      "disc": "Sends out lighting in a cone, dealing damage to all enemies in the area.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "E-118 Device",
      "disc": "Sends out a crate of scrap, dealing damage and stunning a target.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Anti-personnel Mines",
      "disc": "Places a mine that detonates when an enemy unit is nearby, dealing damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Personal Defense Turret",
      "disc": "Deploys a turret at a target location that attacks nearby enemies.",
      "thumbnail": ""
    }
  ]
};
export default Master_Engineer;
