import React from "react";
import './GameIntro.jsx'
import "./game.css"
import Logo from '../img/BoDlogo.png'
import GameIntro from "./GameIntro.jsx";
import GameMechanics from "./GameMechanics.jsx";
import GameFlow from "./GameFlow.jsx";
import GameCommander from "./GameCommander.jsx";
import GameItems from "./GameItems.jsx";
import GameHeadquarter from "./GameHeadquarter.jsx";
import GameMinion from "./GameMinion.jsx";
import GameNatives from "./GameNatives.jsx";
import GameObjectives from "./GameObjectives.jsx";


export default function Game(){
    return(
            <div>
                <GameIntro />
                <GameMechanics />
                <GameFlow />
                <GameCommander />
                <GameItems />
                <GameHeadquarter />
                <GameMinion />
                <GameNatives />
                <GameObjectives />
            </div>
    );
};

//This will be a game guide. Should contain the following:
// - Game rules
// - Game mechanics
// - Game flow
// - What is a Commander
// - What are Items
// - What is your Headquarter
// - What is a Minion
// - What are Natives
// - Game Objectives

//This could also be a good blueprint for Patch Notes. Each catagory rendered per item in PatchNotes.js. If category is not present, do not render it. Maybe this is the way?