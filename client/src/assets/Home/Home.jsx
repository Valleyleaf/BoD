import React, { useState } from "react";
import GamePage from "../Game/Game.jsx"

export default function Home() {
    return (
        <div className="flexColumn">
            <div>
                <h2>Welcome to Battle of Dominance</h2>
                <p>A custom MOBA-style map for WARCRAFT III, 15 years in development.</p>
            </div>
                <div>
                    <a href="https://www.hiveworkshop.com/threads/battle-of-dominance-v2-0-arcane-showdown.326630/" target="_blank" rel="noopener noreferrer">
                        <button>DOWNLOAD</button>
                    </a>
                </div>
                <div>
                    <h2>Insert hero carousel here. Copy from Commanders but use Character.Thumbnail, render 3 rows stacked ontop of each other</h2>
                    <h2>Insert Highlight carousel here. What that is, I do not yet know. Screenshots?</h2>
                </div>
            <div className="flexColumn center-content">
                    <h2>About:</h2>
                    <GamePage/>
            </div>
        </div>
    );
}