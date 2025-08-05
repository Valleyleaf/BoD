import ArcaneOverlordBio from '../LoreSheets/ArcaneOverlordBio.json'

const Arcane_Overlord = {
  "id": 3,
  "name": "Kain",
  "title": "Arcane Overlord",
  "difficulty": 5,
  "slug": "arcane-overlord",
  "thumbnail": "https://i.imgur.com/L8zqEYK.png",
  "image": "https://i.imgur.com/oWVNhxC.jpeg",
  "description": "Adaptive spellcaster with a large arsenal of abilities.",
  "lore": ArcaneOverlordBio,
  "primaryStat": "Intelligence",
  "stats": [
    "10+(1 per level)",
    "14+(1.5 per level)",
    "18+(+2.3 per level)",
  ],
  "faction": "Mechanisms",
  "roles": [
    "Carry",
    "Ranged"
  ],
  "abilities": [
    {
      "abilityid": 0,
      "name": "Arcane Overlord",
      "disc": "Upon casting a spell, Kain gets an idea, deciding the outcome of Arcanium.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_male.jpg"
    },
    {
      "abilityid": 1,
      "name": "Shock Break",
      "disc": "Sends forward a bolt of arcane energy, dealing damage to a single target. Upon reaching level 5, also Deals Damage equal to 10% of Kains total Mana. Casting this spell causes Kains Mindset to focus.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_enslavedemon.jpg"
    },
    {
      "abilityid": 2,
      "name": "Overload",
      "disc": "Creates two Images of Kain. The Images deal a % of his Attack Damage and take increased damage from all sources. At Max level, the Images deal increased damage. Casting this spell causes Kain to equalize his mindset, bringing it closer to an even field.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_ice_lament.jpg"
    },
    {
      "abilityid": 3,
      "name": "Impulse",
      "disc": "Deals damage to all nearby enemy units every second. At Max level, this increases to ever half-second. Casting this spell causes Kain to spike, increasing his Mindset",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_mage_temporalshield.jpg"
    },
    {
      "abilityid": 4,
      "name": "Arcanium",
      "disc": "Kain taps into his unknown potential, drawing out a powerful spell based on his current Mindset. Casting a spell reduces the cooldown of Arcanium by 5 seconds.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_amulet_01.jpg"
    },
    {
      "abilityid": 5,
      "name": "Arcanium - Tri-Edge",
      "disc": "Sends out three bolts of Arcane energy, dealing massive damage to a single target.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/ability_mage_missilebarrage.jpg"
    },
    {
      "abilityid": 6,
      "name": "Arcanium - Rip Magic",
      "disc": "Steals a target enemy buff and a set amount of mana from a target enemy unit.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/ability_evoker_fontofmagic.jpg"
    },
    {
      "abilityid": 7,
      "name": "Arcanium - Null Zone",
      "disc": "Creates a zone in which enemy units are unable to attack or cast spells. This is a channeled ability.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/ability_mage_arcanosphere.jpg"
    },
    {
      "abilityid": 8,
      "name": "Arcanium - Arcane Wall",
      "disc": "Creates a wall of unstable magic. Enemy units that walk through the wall take damage and are slowed for a short duration.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/spell_mage_runeofpower.jpg"
    },
    {
      "abilityid": 9,
      "name": "Arcanium - Layline Hijack",
      "disc": "Kain taps into the power of the Laylines, allowing him to teleport to a set location on the map.",
      "thumbnail": "https://wow.zamimg.com/images/wow/icons/large/sha_ability_mage_firestarter_nightborne.jpg"
    }
  ]
};
export default Arcane_Overlord;
