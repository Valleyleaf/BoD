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

// There is now little point to this document and I should refactor and merge this with GameRender.jsx as it is handling the whole logic.