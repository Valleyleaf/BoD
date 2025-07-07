import React from "react";
import "./game.css"
import GameRender from "./GameRender.jsx";



export default function Game(){
    return(
            <div>
                <GameRender />
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