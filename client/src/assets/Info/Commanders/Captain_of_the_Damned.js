const Captain_of_the_Damned = {
  "id": 12,
  "name": "Lord Vile",
  "title": "Captain of the Damned",
  "difficulty": 2,
  "slug": "captain-of-the-damned",
  "thumbnail": "https://i.imgur.com/K7Cwbs1.png",
  "thumbnailAlt": "Image of The Example",
  "image": "https://i.imgur.com/8qZR9HN.jpeg",
  "description": "Indomitable fighter who chases down enemies with relentless fury.",
  "lore": "Fights with resilience",
  "primaryStat": "Strength",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Void Whisperers",
  "roles": [
    "Fighter",
    "Melee",
    "Off-Tank"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Dead Crew",
      "disc": "Upon killing a unit, the Captain of the Damned takes their soul to work for him, granting his next ability bonus effects.",
      "thumbnail": ""
    },
    {
      "abilityid": 1,
      "name": "A storm of blades",
      "disc": "The Captain of the Damned gains increased movement speed, attack speed and life steal for a short duration. If he has a Dead Crew soul, the effects are increased.",
      "thumbnail": ""
    },
    {
      "abilityid": 2,
      "name": "Part of the Crew",
      "disc": "Detatches a Dead Crew soul to guard an area. If an enemy unit enters the area, the soul will strike, dealing damage.",
      "thumbnail": ""
    },
    {
      "abilityid": 3,
      "name": "Revenge Cutlass",
      "disc": "Sends out a bolt of negative damage dealing energy at a enemy unit from a long range. Sends out an additional bolt for each Dead Crew soul the Captain of the Damned has.",
      "thumbnail": ""
    },
    {
      "abilityid": 4,
      "name": "High Seas",
      "disc": "Sends out a swarm of ghostly pirates that attack nearby enemy units. The swarm will follow the Captain of the Damned and deal damage to all enemy units in its path.",
      "thumbnail": ""
    }
  ]
};
export default Captain_of_the_Damned;
