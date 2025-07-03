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
                    name: "",
                    disc: "",
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
        description: "Silent assassin",
        lore: "Calculates every move",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 6,
        name: "Mephisto",
        title: "Bell Ringer",
        slug: "bell-ringer", 
        thumbnail: "https://i.imgur.com/rgkDXJi.jpeg",
        thumbnailAlt: "Image of The Example",
        image: " ",
        description: "Wise sage",
        lore: "Rises to battle",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 7,
        name: "Ragnar",
        title: "Berserker",
        slug: "berserker", 
        thumbnail: "https://i.imgur.com/KH6wTpt.jpeg",
        thumbnailAlt: "Image of The Example",
        image: " ",
        description: "Mighty protector",
        lore: "Faces the unknown",
        primaryStat: "Strength",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 8,
        name: "Dollar",
        title: "Black Clown",
        slug: "black-clown",
        thumbnail: "https://i.imgur.com/6e88puJ.jpeg",
        thumbnailAlt: "Image of The Example",
        image: " ",
        description: "Speedy archer",
        lore: "Quick and precise",
        primaryStat: "Agility",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 9,
        name: "Dampes",
        title: "Blazing Wind",
        slug: "blazing-wind",
        thumbnail: "https://i.imgur.com/LEikbov.jpeg",
        thumbnailAlt: "Image of The Example",
        image: " ",
        description: "Stealthy sniper",
        lore: "Silent but deadly",
        primaryStat: "Agility",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
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
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
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
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
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
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 14,
        name: "Ashleigh Lynn",
        title: "Celestial Mage",
        slug: "celestial-mage", 
        thumbnail: "https://i.imgur.com/pwwdofr.jpeg",
        image: " ",
        description: "Rapid marksman",
        lore: "Never misses a shot",
        primaryStat: "Agility",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 15,
        name: "Minthera",
        title: "Chrono Shifter",
        slug: "chrono-shifter",
        thumbnail: "https://i.imgur.com/KPqhQY0.jpeg",
        image: " ",
        description: "Hardened warrior",
        lore: "Never backs down",
        primaryStat: "Strength",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
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
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 17,
        name: "Zul'Amin",
        title: "Crimson Glade Warlord",
        slug: "crimson-glade-warlord", 
        thumbnail: "https://i.imgur.com/xxEfa26.jpeg",
        image: " ",
        description: "Immovable tank",
        lore: "Never surrenders",
        primaryStat: "Strength",
        stats: [""],
        faction: "Mechanisms",
        roles: ["Carry", "Ranged"],
        ability0: {
            name: "Passive Ability 1",
            disc: "Passive Ability 1",
            cost: "0"
        },
        ability1: {
            name: "Active Ability 1",
            disc: "Active Ability 1",
            cost: "10"
        },
        ability2: {
            name: "Active Ability 2",
            disc: "Active Ability 2",
            cost: "20"
        },
        ability3: {
            name: "Active Ability 3",
            disc: "Active Ability 4",
            cost: "30"
        },
        ability4: {
            name: "Ultimate Ability",
            disc: "Ultimate Ability 4",
            cost: "40"
        }
    },
    {
        id: 18,
        name: "Califrax",
        title: "Duke of Winter",
        slug: "duke-of-winter",
        thumbnail: "https://i.imgur.com/eKlTykx.jpeg",
        image: " ",
        description: "Immovable tank",
        lore: "Cunning thief",
        primaryStat: "Intelligence",
        stats: [""],
        faction: "Gaia's Guard",
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
    id: 19,
    name: "",
    title: "",
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
        id: 20,
        name: "",
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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
        title: "",
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