let Characters = [
    {
        id: 1,
        name: "Spine",
        title: "The Abyssal King",
        difficulty: 3,
        slug: "abyssal-king",
        thumbnail: "https://i.pinimg.com/736x/ea/fb/40/eafb40de7d0e12896fcebb0108fd120e.jpg",
        thumbnailAlt: "Image of the Abyssal King",
        image: "https://i.pinimg.com/736x/ea/fb/40/eafb40de7d0e12896fcebb0108fd120e.jpg",
        description: "Mystical spellcaster with powerful crowd control abilities",
        lore: "./LoreSheets/test.md",
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
        slug: "alchemist",
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
        image: " ",
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
        image: " ",
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
        image: " ",
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
        image: " ",
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
        image: " ",
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
        image: " ",
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
        image: " ",
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
        image: " ",
        description: "Gigantic warrior",
        lore: "Unstoppable force",
        primaryStat: "Strength",
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
        image: " ",
        description: "Powerful sorcerer",
        lore: "Weaves powerful magic",
        primaryStat: "Intelligence",
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
        id: 12,
        name: "Lord Vile",
        title: "Captain of the Damned",
        slug: "captain-of-the-damned",
        thumbnail: "https://i.imgur.com/8qZR9HN.jpeg",
        thumbnailAlt: "Image of The Example",
        image: " ",
        description: "Unbreakable defender",
        lore: "Fights with resilience",
        primaryStat: "Strength",
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
        id: 14,
        name: "Ashleigh Lynn",
        title: "Celestial Mage",
        slug: "celestial-mage", 
        thumbnail: "https://i.imgur.com/pwwdofr.jpeg",
        image: " ",
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
        id: 15,
        name: "Minthera",
        title: "Chrono Shifter",
        slug: "chrono-shifter",
        thumbnail: "https://i.imgur.com/KPqhQY0.jpeg",
        image: " ",
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
        id: 16,
        name: "Dijlabre",
        title: "Collector",
        slug: "collector",
        thumbnail: "https://i.imgur.com/dkDcLz4.jpeg",
        image: " ",
        description: "Cunning strategist",
        lore: "Outsmarts enemies",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Tank","Carry","Melee"],
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
        name: "Zul'Amin",
        title: "Crimson Glade Warlord",
        slug: "crimson-glade-warlord", 
        thumbnail: "https://i.imgur.com/xxEfa26.jpeg",
        image: " ",
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
        id: 18,
        name: "Califrax",
        title: "Duke of Winter",
        slug: "duke-of-winter",
        thumbnail: "https://i.imgur.com/eKlTykx.jpeg",
        image: " ",
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
    id: 19,
    name: "",
    title: "Emissary of the Keg Lords",
    slug: "emissary-of-the-keg-lords", 
    thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
    image: " ",
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
        id: 20,
        name: "",
        title: "Ember",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 21,
        name: "",
        title: "Eternal Revenant",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 22,
        name: "",
        title: "Felmage",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 23,
        name: "",
        title: "Flame King",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 24,
        name: "",
        title: "Flamesickle",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 25,
        name: "",
        title: "Aspect of Nature",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 26,
        name: "",
        title: "Gill",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 27,
        name: "",
        title: "Golden Conqueror",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        id: 28,
        name: "",
        title: "Gunslinger",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Hallucinationist",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Hand of the Abyss",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Herald of Time",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Hexrelic",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Hydromancer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "King Mechanism",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Lightbringer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Lone Wanderer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Master Engineer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Mercy's Hand",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Necromancer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Night Hunter",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Nomad",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Patchwork Golem",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Phase Drake",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Primarch of Magic",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Prince Mechanism",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Pursuer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Rift Walker",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Sage",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Salamander",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Salvador",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Scavenger",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Scroll Ninja",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Sea Wraith",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Shadow Herald",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Shepherd of the Lost",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Slumborn",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Stalker",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Stormbringer",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Vengence Incarnate",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "Volcano Lord",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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
        title: "War Master",
        slug: "",
        thumbnail: "https://i.imgur.com/IvUamHu.jpeg",
        image: " ",
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

let list = [
    "Abyssal King",
    "Alchemist",
    "Arcane Overlord",
    "Arachnid Priest",
    "Aspect of the Wilds",
    "Bell Ringer",
    "Berserker",
    "Black Clown",
    "Blazing Wind",
    "Bounty Huntress",
    "Captain of the Abyss",
    "Captain of the Damned",
    "Celestial Mage",
    "Chrono Shifter",
    "Collector",
    "Crimson Glade Warlord",
    "Demon Eater",
    "Duke of Winter",
    "Emissary of the Keg Lords",
    "Ember",
    "Eternal Revenant",
    "Felmage",
    "Flame King",
    "FlameSickle",
    "Gaias Guard",
    "Gill",
    "Golden Conqueror",
    "Gunslinger",
    "Hallucinationist",
    "Hand of the Abyss",
    "Herald of Time",
    "Hexrelic",
    "Hydromancer",
    "King Mechanism",
    "Lightbringer",
    "Lone Wanderer",
    "Master Engineer",
    "Mercy's Hand",
    "Necromancer",
    "Night Hunter",
    "Nomad",
    "Patchwork Golem",
    "Phase Drake",
    "Primarch of Magic",
    "Prince Mechanism",
    "Pursuer",
    "Rift Walker",
    "Sage",
    "Salamander",
    "Salvador",
    "Scavenger",
    "Scroll Ninja",
    "Sea Wraith",
    "Shadow Herald",
    "Shepherd of the Lost",
    "Slumborn",
    "Stalker",
    "Stormbringer",
    "Vengence Incarnate",
    "Volcano Lord",
    "War Master"
];


export {Characters}