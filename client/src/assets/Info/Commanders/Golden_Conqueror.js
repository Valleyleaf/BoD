import GoldenConquerorLore from '../LoreSheets/GoldenConquerorBio.json';

const Golden_Conqueror = {
  "id": 26,
  "name": "Pulveris",
  "title": "Golden Conqueror",
  "difficulty": 3,
  "slug": "golden-conqueror",
  "thumbnail": "https://i.imgur.com/RBSgoTw.png",
  "image": "https://i.imgur.com/R9YP6fC.jpeg",
  "description": "Casting duelist who gains bonuses the more spells he casts.",
  "lore": GoldenConquerorLore,
  "primaryStat": "Agility",
  "stats": [
    "14+(1.5 per level)",
    "18+(2 per level)",
    "12+(1 per level)",
  ],
  "faction": "The Faithless",
  "roles": [
    "Carry",
    "Duelist",
    "Caster"
  ],
  "abilities": [
      {
      "abilityid": 5,
      "name": "Mania (Innate)",
      "disc": "The Golden Conqueror gains bonus attack speed for each stack of Mania he has. Casting a spell requires and consumes a stack of mania.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_excorcism.jpg"
    },
    {
      "abilityid": 0,
      "name": "End of Kin (P)",
      "disc": "Applies a stacking damage over time effect upon attack.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_harmundeadaura.jpg"
    },
    {
      "abilityid": 1,
      "name": "Plaguebringer (Q)",
      "disc": "Sends out a cursed bolt of energy at a target enemy unit, dealing damage over time to the target and those around it..",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_excorcism_02.jpg"
    },
    {
      "abilityid": 2,
      "name": "Shattering Strike (W)",
      "disc": "The Golden Conqueror strikes a target enemy unit, dealing % health damage.",
      "thumbnail": "https://classic.battle.net/war3/images/neutral/spells/transmute.gif"
    },
    {
      "abilityid": 3,
      "name": "Manic (E)",
      "disc": "Upon striking a enemy unit, the Golden Conqueror gains a stack of Mania. Each stack grants bonus movement speed up to a cap.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_ardentdefender.jpg"
    },
    {
      "abilityid": 4,
      "name": "Rise my Kingdom (R)",
      "disc": "The Golden Conqueror summons a ring of gladiators around him. Enemy units that go near the gladiators are tossed into the centre of the pit and are stunned for a short duration. Upon activation, the Golden Conqueror gains full stacks of Mania.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/ability_warlock_fireandbrimstone.jpg"
    }
  ]
};
export default Golden_Conqueror;
