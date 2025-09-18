import { connectDB } from "../Config/Connection.js";
import Commander from "../models/Commanders.js";

// Import all your commander data
import Abyssal_King from "../../client/src/assets/Info/Commanders/The_Abyssal_King.js";
import Alchemist from "../../client/src/assets/Info/Commanders/The_Alchemist.js";
import Aspect_of_the_Wilds from "../../client/src/assets/Info/Commanders/Aspect_of_the_Wilds.js";
import Arachnid_Priest from "../../client/src/assets/Info/Commanders/Arachnid_Priest.js";
import Arcane_Overlord from "../../client/src/assets/Info/Commanders/Arcane_Overlord.js";
import Bell_Ringer from "../../client/src/assets/Info/Commanders/Bell_Ringer.js";
import Berserker from "../../client/src/assets/Info/Commanders/Berserker.js";
import Black_Clown from "../../client/src/assets/Info/Commanders/Black_Clown.js";
import Blackblade_Warlord from "../../client/src/assets/Info/Commanders/Blackblade_Warlord.js";
import Blazing_Wind from "../../client/src/assets/Info/Commanders/Blazing_Wind.js";
import Bounty_Huntress from "../../client/src/assets/Info/Commanders/Bounty_Huntress.js";
import Captain_of_the_Abyss from "../../client/src/assets/Info/Commanders/Captain_of_the_Abyss.js";
import Captain_of_the_Damned from "../../client/src/assets/Info/Commanders/Captain_of_the_Damned.js";
import Celestial_Mage from "../../client/src/assets/Info/Commanders/Celestial_Mage.js";
import Chrono_Shifter from "../../client/src/assets/Info/Commanders/Chrono_Shifter.js";
import Collector from "../../client/src/assets/Info/Commanders/Collector.js";
import Crimson_Glade_Warlord from "../../client/src/assets/Info/Commanders/Crimson_Glade_Warlord.js";
import Duke_of_Winter from "../../client/src/assets/Info/Commanders/Duke_of_Winter.js";
import Demon_Eater from "../../client/src/assets/Info/Commanders/Demon_Eater.js";
import Emissary_of_the_Keg_Lords from "../../client/src/assets/Info/Commanders/Emissary_of_the_Keg_Lords.js";
import Ember from "../../client/src/assets/Info/Commanders/Ember.js";
import Eternal_Revenant from "../../client/src/assets/Info/Commanders/Eternal_Revenant.js";
import Felmage from "../../client/src/assets/Info/Commanders/Felmage.js";
import Flame_King from "../../client/src/assets/Info/Commanders/Flame_King.js";
import Flamesickle from "../../client/src/assets/Info/Commanders/Flamesickle.js";
import Aspect_of_Nature from "../../client/src/assets/Info/Commanders/Aspect_of_Nature.js";
import Gill from "../../client/src/assets/Info/Commanders/Gill.js";
import Golden_Conqueror from "../../client/src/assets/Info/Commanders/Golden_Conqueror.js";
import Gunslinger from "../../client/src/assets/Info/Commanders/Gunslinger.js";
import Hallucinationist from "../../client/src/assets/Info/Commanders/Hallucinationist.js";
import Hand_of_the_Abyss from "../../client/src/assets/Info/Commanders/Hand_of_the_Abyss.js";
import Herald_of_Time from "../../client/src/assets/Info/Commanders/Herald_of_Time.js";
import Hexrelic from "../../client/src/assets/Info/Commanders/Hexrelic.js";
import Hydromancer from "../../client/src/assets/Info/Commanders/Hydromancer.js";
import King_Mechanism from "../../client/src/assets/Info/Commanders/King_Mechanism.js";
import Lightbringer from "../../client/src/assets/Info/Commanders/Lightbringer.js";
import Lone_Wanderer from "../../client/src/assets/Info/Commanders/Lone_Wanderer.js";
import Master_Engineer from "../../client/src/assets/Info/Commanders/Master_Engineer.js";
import Mercy_s_Hand from "../../client/src/assets/Info/Commanders/Mercy_s_Hand.js";
import Necromancer from "../../client/src/assets/Info/Commanders/Necromancer.js";
import Night_Hunter from "../../client/src/assets/Info/Commanders/Night_Hunter.js";
import Nomad from "../../client/src/assets/Info/Commanders/Nomad.js";
import Patchwork_Golem from "../../client/src/assets/Info/Commanders/Patchwork_Golem.js";
import Phase_Drake from "../../client/src/assets/Info/Commanders/Phase_Drake.js";
import Primarch_of_Magic from "../../client/src/assets/Info/Commanders/Primarch_of_Magic.js";
import Prince_Mechanism from "../../client/src/assets/Info/Commanders/Prince_Mechanism.js";
import Pursuer from "../../client/src/assets/Info/Commanders/Pursuer.js";
import Rift_Walker from "../../client/src/assets/Info/Commanders/Rift_Walker.js";
import Sage from "../../client/src/assets/Info/Commanders/Sage.js";
import Salamander from "../../client/src/assets/Info/Commanders/Salamander.js";
import Salvador from "../../client/src/assets/Info/Commanders/Salvador.js";
import Scavenger from "../../client/src/assets/Info/Commanders/Scavenger.js";
import Scroll_Ninja from "../../client/src/assets/Info/Commanders/Scroll_Ninja.js";
import Sea_Wraith from "../../client/src/assets/Info/Commanders/Sea_Wraith.js";
import Shadow_Herald from "../../client/src/assets/Info/Commanders/Shadow_Herald.js";
import Shepherd_of_the_Lost from "../../client/src/assets/Info/Commanders/Shepherd_of_the_Lost.js";
import Slumborn from "../../client/src/assets/Info/Commanders/Slumborn.js";
import Stalker from "../../client/src/assets/Info/Commanders/Stalker.js";
import Stormbringer from "../../client/src/assets/Info/Commanders/Stormbringer.js";
import Vengence_Incarnate from "../../client/src/assets/Info/Commanders/Vengence_Incarnate.js";
import Volcano_Lord from "../../client/src/assets/Info/Commanders/Volcano_Lord.js";
import War_Master from "../../client/src/assets/Info/Commanders/War_Master.js";
import Wave_Crusher from "../../client/src/assets/Info/Commanders/Wave_Crusher.js";
import ForgeMaster from "../../client/src/assets/Info/Commanders/ForgeMaster.js";

const commanders = [
  Abyssal_King,
  Alchemist,
  Aspect_of_the_Wilds,
  Arachnid_Priest,
  Arcane_Overlord,
  Bell_Ringer,
  Berserker,
  Black_Clown,
  Blackblade_Warlord,
  Blazing_Wind,
  Bounty_Huntress,
  Captain_of_the_Abyss,
  Captain_of_the_Damned,
  Celestial_Mage,
  Chrono_Shifter,
  Collector,
  Crimson_Glade_Warlord,
  Duke_of_Winter,
  Demon_Eater,
  Emissary_of_the_Keg_Lords,
  Ember,
  Eternal_Revenant,
  Felmage,
  Flame_King,
  Flamesickle,
  Aspect_of_Nature,
  Gill,
  Golden_Conqueror,
  Gunslinger,
  Hallucinationist,
  Hand_of_the_Abyss,
  Herald_of_Time,
  Hexrelic,
  Hydromancer,
  King_Mechanism,
  Lightbringer,
  Lone_Wanderer,
  Master_Engineer,
  Mercy_s_Hand,
  Necromancer,
  Night_Hunter,
  Nomad,
  Patchwork_Golem,
  Phase_Drake,
  Primarch_of_Magic,
  Prince_Mechanism,
  Pursuer,
  Rift_Walker,
  Sage,
  Salamander,
  Salvador,
  Scavenger,
  Scroll_Ninja,
  Sea_Wraith,
  Shadow_Herald,
  Shepherd_of_the_Lost,
  Slumborn,
  Stalker,
  Stormbringer,
  Vengence_Incarnate,
  Volcano_Lord,
  War_Master,
  Wave_Crusher,
  ForgeMaster
];

async function migrateCommanders() {
  try {
    console.log("Connecting to database...");
    await connectDB();
    
    console.log("Clearing existing commanders...");
    await Commander.deleteMany({});
    
    console.log("Inserting commanders...");
    const insertedCommanders = await Commander.insertMany(commanders);
    
    console.log(`Successfully inserted ${insertedCommanders.length} commanders`);
    console.log("Migration completed!");
    
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

migrateCommanders();
