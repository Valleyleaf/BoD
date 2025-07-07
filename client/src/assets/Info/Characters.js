import AbyssalkingLore from "./LoreSheets/AbyssalKingLore.json";

let Characters = [
    {
        id: 1,
        name: "Spine",
        title: "The Abyssal King",
        difficulty: 3,
        slug: "the-abyssal-king",
        thumbnail: "https://i.pinimg.com/736x/ea/fb/40/eafb40de7d0e12896fcebb0108fd120e.jpg",
        thumbnailAlt: "Image of the Abyssal King",
        image: "https://i.pinimg.com/736x/ea/fb/40/eafb40de7d0e12896fcebb0108fd120e.jpg",
        description: "Mystical spellcaster with powerful crowd control abilities",
        lore: AbyssalkingLore,
        primaryStat: "Intelligence",
        stats: ["14", "12", "18"],
        // Stats are Strength, Agility, Intelligence in that order.
        faction: "Void Whisperers",
        roles: ["Carry", "Melee", "Crowd Control"],
        abilities: [
            {
                abilityid: 0,
                name: "Magic Mail",
                disc: "Upon casting a spell The Abyssal King gains Spell Immunity for a short duration.",
                thumbnail: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostnova.jpg"
            },
            {
                abilityid: 1,
                name: "Path of Frost",
                disc: "Sends forward a wave of frost that encases enemies and deals damage.",
                thumbnail: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostnova.jpg"
            },
            {
                abilityid: 2,
                name: "Insta Frost",
                disc: "Creates frost around a target enemy, dealing damage and slowing them.",
                thumbnail: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostnova.jpg"
            },
            {
                abilityid: 3,
                name: "Soul Sap",
                disc: "The Abyssal King drains the life force from a slain enemy, healing himself.",
                thumbnail: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostnova.jpg"
            },
            {
                abilityid: 4,
                name: "Final Hour",
                disc: "Creates a powerful storm that deals damage to all enemies in the area.",
                thumbnail: "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostnova.jpg"
            },
        ]
    },
    {
        id: 2,
        name: "Jun",
        title: "The Alchemist",
        slug: "the-alchemist",
        thumbnail: "https://i.imgur.com/e5yRuLz.jpeg",
        image: "https://i.imgur.com/e5yRuLz.jpeg",
        description: "Melee tank with powerful supportive abilities and self-preservation",
        lore: "John leads by example",
        primaryStat: "Strength",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Melee", "Tank", "Support"],
        abilities: [
            {
                abilityid: 0,
                name: "Gargoyle Skin",
                disc: "Grants the Alchemist increased health regeneration.",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "Blood Bond",
                disc: "Causes a targeted unit to gain increased attack speed at the cost of health over time.",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "Gust",
                disc: "Tosses a targeted unit into the air, rendering them nullified for a short duration.",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "Barrel of Fun",
                disc: "The Alchemist tosses down a barrel of explosives that latches onto a targeted enemy. After a set duration, the barrel explodes, dealing damage to all enemies in the area.",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "Defender",
                disc: "The Alchemist lands and takes on the form of a statue. While in this form, he gains increased armor, magic resistance and health regeneration but is not able to move. At the end of the cast, he breaks free, dealing damage based on his current % health.",
                thumbnail: ""
            },
        ]
    },
    {
        id: 3,
        name: "Kain",
        title: "Arcane Overlord",
        slug: "arcane-overlord",
        thumbnail: "https://i.imgur.com/oWVNhxC.jpeg",
        image: "https://i.imgur.com/oWVNhxC.jpeg",
        description: "Adaptive spellcaster with a large arsenal of abilities.",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        abilities: [
            {
                abilityid: 0,
                name: "Arcane Overlord",
                disc: "Upon casting a spell, Kain get’s an idea, deciding the outcome of Arcanium.",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "Shock Break",
                disc: "Sends forward a bolt of arcane energy, dealing damage to a single target. Upon reaching level 5, also Deals Damage equal to 10% of Kains total Mana. Casting this spell causes Kains Mindset to focus.",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "Overload",
                disc: "Creates two Images of Kain. The Images deal a % of his Attack Damage and take increased damage from all sources. At Max level, the Images deal increased damage. Casting this spell causes Kain to equalize his mindset, bringing it closer to an even field.",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "Impulse",
                disc: "Deals damage to all nearby enemy units every second. At Max level, this increases to ever half-second. Casting this spell causes Kain to spike, increasing his Mindset",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "Arcanium",
                disc: "Kain taps into his unknown potential, drawing out a powerful spell based on his current Mindset. Casting a spell reduces the cooldown of Arcanium by 5 seconds.",
                thumbnail: ""
            },
            {
                abilityid: 5,
                name: "Arcanium - Tri-Edge",
                disc: "Sends out three bolts of Arcane energy, dealing massive damage to a single target.",
                thumbnail: ""
            },
            {
                abilityid: 6,
                name: "Arcanium - Rip Magic",
                disc: "Steals a target enemy buff and a set amount of mana from a target enemy unit.",
                thumbnail: ""
            },
            {
                abilityid: 7,
                name: "Arcanium - Null Zone",
                disc: "Creates a zone in which enemy units are unable to attack or cast spells. This is a channeled ability.",
                thumbnail: ""
            },
            {
                abilityid: 8,
                name: "Arcanium - Arcane Wall",
                disc: "Creates a wall of unstable magic. Enemy units that walk through the wall take damage and are slowed for a short duration.",
                thumbnail: ""
            },
            {
                abilityid: 9,
                name: "Arcanium - Layline Hijack",
                disc: "Kain taps into the power of the Laylines, allowing him to teleport to a set location on the map.",
                thumbnail: ""
            },
        ]
    },
    {
        id: 4,
        name: "Naze",
        title: "Arachnid Priest",
        slug: "arachnid-priest",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "A cunning mage with strong damage over time abilities",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Void Whisperers",
        roles: ["Ranged", "Mage", "Support"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "Anti-Life",
                disc: "Reduces the attack speed, movement speed and armor of a target enemy unit by a large amount for a short duration.",
                thumbnail: ""
            },
        ]
    },
    {
        id: 5,
        name: "Crepúsculo",
        title: "Aspect of the Wilds",
        slug: "aspect-of-the-wilds",
        thumbnail: "https://i.imgur.com/YcHNCst.jpeg",
        image: "https://i.imgur.com/YcHNCst.jpeg",
        description: "Elusive support with strong offensive capabilities",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Support", "Ranged", "Mage"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 6,
        name: "Mephisto",
        title: "Bell Ringer",
        slug: "bell-ringer",
        thumbnail: "https://i.imgur.com/rgkDXJi.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/rgkDXJi.jpeg",
        description: "Powerful duelist with strong debuff capabilities",
        lore: "Rises to battle",
        primaryStat: "Strength",
        stats: [""],
        faction: "Inferno Crusade",
        roles: ["Carry", "Melee", "Duelist"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 7,
        name: "Ragnar",
        title: "Berserker",
        slug: "berserker",
        thumbnail: "https://i.imgur.com/KH6wTpt.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/KH6wTpt.jpeg",
        description: "Tank with the ability to shrug off crowd control effects",
        lore: "Faces the unknown",
        primaryStat: "Strength",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Tank", "Melee"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 8,
        name: "Dollar",
        title: "Black Clown",
        slug: "black-clown",
        thumbnail: "https://i.imgur.com/6e88puJ.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/6e88puJ.jpeg",
        description: "Elusive assassin with the ability to confuse enemies and deal massive damage",
        lore: "Quick and precise",
        primaryStat: "Agility",
        stats: [""],
        faction: "The Abyss",
        roles: ["Carry", "Melee", "Assassin"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 9,
        name: "Dampes",
        title: "Blazing Wind",
        slug: "blazing-wind",
        thumbnail: "https://i.imgur.com/LEikbov.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/LEikbov.jpeg",
        description: "Supportive tank with strong crowd control abilities",
        lore: "Silent but deadly",
        primaryStat: "Strength",
        stats: [""],
        faction: "Inferno Crusade",
        roles: ["Carry", "Melee"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 10,
        name: "Laura Fangwin",
        title: "Bounty Huntress",
        slug: "bounty-huntress",
        thumbnail: "https://i.imgur.com/tb5bc8O.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/tb5bc8O.jpeg",
        description: "Fierce carry who strikes together with a animal companion and gains bonus gold from kills.",
        lore: "Unstoppable force",
        primaryStat: "Agility",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 11,
        name: "Miranda Chance",
        title: "Captain of the Abyss",
        slug: "captain-of-the-abyss",
        thumbnail: "https://i.imgur.com/AWMvzoM.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/AWMvzoM.jpeg",
        description: "Tricky caster with powerful area control abilities. Can summon a ship to aid her in battle.",
        lore: "Weaves powerful magic",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "The Abyss",
        roles: ["Carry", "Ranged", "Caster"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 12,
        name: "Lord Vile",
        title: "Captain of the Damned",
        slug: "captain-of-the-damned",
        thumbnail: "https://i.imgur.com/8qZR9HN.jpeg",
        thumbnailAlt: "Image of The Example",
        image: "https://i.imgur.com/8qZR9HN.jpeg",
        description: "Indomitable fighter who chases down enemies with relentless fury.",
        lore: "Fights with resilience",
        primaryStat: "Strength",
        stats: [""],
        faction: "Void Whisperers",
        roles: ["Fighter", "Melee", "Off-Tank"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 13,
        name: "Ashleigh Lynn",
        title: "Celestial Mage",
        slug: "celestial-mage",
        thumbnail: "https://i.imgur.com/pwwdofr.jpeg",
        image: "https://i.imgur.com/pwwdofr.jpeg",
        description: "Supportive mage who can summon Celestials to aid her in battle.",
        lore: "Never misses a shot",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Mage", "Ranged", "Support"],
        abilities: [
            {
                abilityid: 0,
                name: "Enlightenment",
                disc: "Summoning a Celestial grants them a bonus effect.",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "Sigil of the Sea",
                disc: "Summons Tobash, Celestial of the Sea to aid Ashleigh in battle. Tobash is a fast striking melee unit with Chaos damage.",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "Sigil of the Land",
                disc: "Calls on Domoratu to protect Ashleigh. Domoratu is a tanky melee unit with high armor and health regeneration.",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "Sigil of the Mind",
                disc: "Summons Henma who takes on Ashleigh's form, gaining her Attack Damage, Armor and health. Henma is a ranged unit with supportive abilities.",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "Sigil of the Sky",
                disc: "Calls down Leos, Celestial of the Sky, dealing Damage in an area and stunning enemy units for a short duration.",
                thumbnail: ""
            },
        ]
    },
    {
        id: 14,
        name: "Minthera",
        title: "Chrono Shifter",
        slug: "chrono-shifter",
        thumbnail: "https://i.imgur.com/KPqhQY0.jpeg",
        image: "https://i.imgur.com/KPqhQY0.jpeg",
        description: "Elusive mage, adept at fighting other mages.",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged", "Mage"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 15,
        name: "Dijlabre",
        title: "Collector",
        slug: "collector",
        thumbnail: "https://i.imgur.com/dkDcLz4.jpeg",
        image: "https://i.imgur.com/dkDcLz4.jpeg",
        description: "Adept duelist who can switch between close quarter brawling and ranged casting.",
        lore: "Outsmarts enemies",
        primaryStat: "Strength/Intelligence",
        stats: [""],
        faction: "League of Valor",
        roles: ["Tank","Melee", "Caster", "Mage"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 16,
        name: "Zul'Amin",
        title: "Crimson Glade Warlord",
        slug: "crimson-glade-warlord",
        thumbnail: "https://i.imgur.com/xxEfa26.jpeg",
        image: "https://i.imgur.com/xxEfa26.jpeg",
        description: "Agressive ranged carry with a focus on dealing massive single target damage.",
        lore: "N/A",
        primaryStat: "Agility",
        stats: [""],
        faction: "Inferno Crusade",
        roles: ["Carry", "Ranged"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 17,
        name: "Califrax",
        title: "Duke of Winter",
        slug: "duke-of-winter",
        thumbnail: "https://i.imgur.com/eKlTykx.jpeg",
        image: "https://i.imgur.com/eKlTykx.jpeg",
        description: "Ranged carry with strong crowd control abilities.",
        lore: "Cunning thief",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Carry", "Ranged", "Crowd Control"],
        abilities: [
            {
                abilityid: 0,
                name: "Frozen Veins",
                disc: "Upon casting a spell, Califrax gains bonus armor for a short duration.",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "Flash Freeze",
                disc: "Deals damage to all enemies in a area and slows them for a short duration.",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "Ice Lance",
                disc: "Sends down a frozen shard of ice, dealing damage and stunning targets hit in a small AoE. Leaves behind a icicle that deals additional damage over time.",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "Greed",
                disc: "Hexes a enemy normal unit, converting them to gold, instantly killing them and adding bonus gold to Califrax.",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "Ice Tap",
                disc: "Summons a frost serpeant that deals rapid damage to a single target.",
                thumbnail: ""
            },
        ]
    },
    {
        id: 18,
        name: "",
        title: "Emissary of the Keg Lords",
        slug: "emissary-of-the-keg-lords",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/HSNrqI2.jpeg",
        description: "Adaptive tank with a focus on survivability and crowd control.",
        lore: "N/A",
        primaryStat: "Strength",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Tank", "Melee", "Crowd Control"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 19,
        name: "",
        title: "Ember",
        slug: "ember",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/PiplQc2.jpeg",
        description: "Stealth assassin with critical strike capabilities and the ability to escape danger.",
        lore: "N/A",
        primaryStat: "Agility",
        stats: [""],
        faction: "Inferno Crusade",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 20,
        name: "",
        title: "Eternal Revenant",
        slug: "eternal-revenant",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/U7m60tT.jpeg",
        description: "Life draining tank with the ability to revive himself upon death.",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Void Whisperers",
        roles: ["Tank", "Melee"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 21,
        name: "",
        title: "Felmage",
        slug: "felmage",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/P4OMXnN.jpeg",
        description: "Area of denial mage, adept at locking down enemies and dealing damage over time while healing allies.",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: ["Intelligence"],
        faction: "League of Valor",
        roles: ["Mage", "Support", "Crowd Control"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 22,
        name: "",
        title: "Flame King",
        slug: "flame-king",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/jT9hJUw.jpeg",
        description: "Mystical mage with high base damage and area of effect abilities.",
        lore: "N/A",
        primaryStat: "Strength",
        stats: [""],
        faction: "Inferno Crusade",
        roles: ["Mage", "Caster", "Support"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 23,
        name: "",
        title: "Flamesickle",
        slug: "flamesickle",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/41kuv1t.jpeg",
        description: "Cunning mage with the ability to steal spells and use area of denial abilities.",
        lore: "N/A",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Inferno Crusade",
        roles: ["Mage", "Ranged", "Crowd Control"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 24,
        name: "",
        title: "Aspect of Nature",
        slug: "aspect-of-nature",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "Powerful duelist with the ability to take on different stances, each changing his playstyle.",
        lore: "N/A",
        primaryStat: "Agility",
        stats: [""],
        faction: "Gaia's Guard",
        roles: ["Carry", "Duelist", "Melee"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 25,
        name: "",
        title: "Gill",
        slug: "gill",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/eATW3To.jpeg",
        description: "Cunning Tank with the ability to shrug off damage while locking down enemies.",
        lore: "N/A",
        primaryStat: "Strength",
        stats: [""],
        faction: "League of Valor",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 26,
        name: "",
        title: "Golden Conqueror",
        slug: "golden-conqueror",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/R9YP6fC.jpeg",
        description: "Casting duelist who gains bonuses the more spells he casts.",
        lore: "N/A",
        primaryStat: "Agility",
        stats: [""],
        faction: "League of Valor",
        roles: ["Carry", "Duelist", "Caster"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 27,
        name: "",
        title: "Gunslinger",
        slug: "gunslinger",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/Tsc3tyM.jpeg",
        description: "",
        image: " ",
        description: "High damage ranged carry with the ability to deal massive damage to single targets.",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 28,
        name: "",
        title: "Hallucinationist",
        slug: "hallucinationist",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 29,
        name: "",
        title: "Hand of the Abyss",
        slug: "hand-of-the-abyss",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/6e88puJ.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 30,
        name: "",
        title: "Herald of Time",
        slug: "herald-of-time",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/anD0ATv.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 31,
        name: "",
        title: "Hexrelic",
        slug: "hexrelic",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 32,
        name: "",
        title: "Hydromancer",
        slug: "hydromancer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/cLjGBfT.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 33,
        name: "",
        title: "King Mechanism",
        slug: "king-mechanism",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/nanoexS.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 34,
        name: "",
        title: "Lightbringer",
        slug: "lightbringer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/CyCzT9Y.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 35,
        name: "",
        title: "Lone Wanderer",
        slug: "lone-wanderer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/zSvvVwF.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 36,
        name: "",
        title: "Master Engineer",
        slug: "master-engineer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 37,
        name: "",
        title: "Mercy's Hand",
        slug: "mercys-hand",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/rxL3se5.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 38,
        name: "",
        title: "Necromancer",
        slug: "necromancer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/pXqKwHl.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 39,
        name: "",
        title: "Night Hunter",
        slug: "night-hunter",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/upTkmxn.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 40,
        name: "",
        title: "Nomad",
        slug: "nomad",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/MnEvaIG.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 41,
        name: "",
        title: "Patchwork Golem",
        slug: "patchwork-golem",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/ljpCwFi.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 42,
        name: "",
        title: "Phase Drake",
        slug: "phase-drake",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/HKRRI5p.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 43,
        name: "",
        title: "Primarch of Magic",
        slug: "primarch-of-magic",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://www.hiveworkshop.com/data/ratory-images/261/261985-a28df4a18a5d2a100985aa9071339db7.png",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 44,
        name: "",
        title: "Prince Mechanism",
        slug: "prince-mechanism",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/c0z1zHt.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 45,
        name: "",
        title: "Pursuer",
        slug: "pursuer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/eATW3To.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 46,
        name: "",
        title: "Rift Walker",
        slug: "rift-walker",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/8jRBY2O.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 47,
        name: "",
        title: "Sage",
        slug: "sage",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/1oMmFH9.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 48,
        name: "",
        title: "Salamander",
        slug: "salamander",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/4jomYqJ.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 49,
        name: "",
        title: "Salvador",
        slug: "salvador",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/i4zNIE0.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 50,
        name: "",
        title: "Scavenger",
        slug: "scavenger",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/mN6RENy.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 51,
        name: "",
        title: "Scroll Ninja",
        slug: "scroll-ninja",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/yLPJdpj.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 52,
        name: "",
        title: "Sea Wraith",
        slug: "sea-wraith",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/2LYQ2MA.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 53,
        name: "",
        title: "Shadow Herald",
        slug: "shadow-herald",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/suafdrs.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 54,
        name: "",
        title: "Shepherd of the Lost",
        slug: "shepherd-of-the-lost",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/EEzEvlS.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 55,
        name: "",
        title: "Slumborn",
        slug: "slumborn",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/5DsQ2VX.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 56,
        name: "",
        title: "Stalker",
        slug: "stalker",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/FjvgE7w.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 57,
        name: "",
        title: "Stormbringer",
        slug: "stormbringer",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/kJe1mKf.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 58,
        name: "",
        title: "Vengence Incarnate",
        slug: "vengence-incarnate",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/IvUamHu.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 59,
        name: "",
        title: "Volcano Lord",
        slug: "volcano-lord",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/FeKrgBU.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 60,
        name: "",
        title: "War Master",
        slug: "war-master",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/tOASvVV.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
    {
        id: 61,
        name: "",
        title: "Wave Crusher",
        slug: "Wave-crusher",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: "https://i.imgur.com/blTAJYk.jpeg",
        description: "",
        lore: "N/A",
        primaryStat: "",
        stats: [""],
        faction: " ",
        roles: [""],
        abilities: [
            {
                abilityid: 0,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 1,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 2,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 3,
                name: "",
                disc: "",
                thumbnail: ""
            },
            {
                abilityid: 4,
                name: "",
                disc: "",
                thumbnail: ""
            },
        ]
    },
];

export {Characters}

