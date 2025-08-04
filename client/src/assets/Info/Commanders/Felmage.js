const Felmage = {
  "id": 21,
  "name": "Ul",
  "title": "Felmage",
  "difficulty": 3,
  "slug": "felmage",
  "thumbnail": "https://i.imgur.com/IvUamHu.jpeg",
  "image": "https://i.imgur.com/P4OMXnN.jpeg",
  "description": "Area of denial mage, adept at locking down enemies and dealing damage over time while healing allies.",
  "lore": "N/A",
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "League of Valor",
  "roles": [
    "Mage",
    "Support",
    "Crowd Control"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Heightened Knowledge",
      "disc": "Grants bonus Intelligence per level.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "Corrupt Land",
      "disc": "The Felmage creates a field of corruption at a target location. All units within the field take % health damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Guiding Light",
      "disc": "The Felmage creates a toggleable aura around him that heals allied units.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Shield of Spite",
      "disc": "Creates a anti-magic shield around a target allied unit. If the shield remains unbroken until expiration, it will stun nearby enemy units.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "Shatter Earth",
      "disc": "The Felmage channels, creating a earthquake at a target location. Enemy units caught in the earthquake are massively slowed as long as they remain in the area.",
      "thumbnail": ""
    }
  ]
};
export default Felmage;
