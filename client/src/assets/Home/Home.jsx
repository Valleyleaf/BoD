import React, { useState } from "react";
import { Link } from "react-router-dom";
import GamePage from "../Game/Game.jsx"
import "./home.css";


export default function Home() {

    // const rowCount = 3;
    // const eachRow = Math.ceil(Characters.length / rows);
    // const rows = Array.from({ length: rowCount }, (_, i) => Characters.slice(i * perRow, (i + 1) * perRow));

    return (
        <div className="flexColumn">
            <div>
                <h2 className='HomeTitle'>Welcome to Battle of Dominance</h2>
                <p>A custom MOBA-style map for WARCRAFT III, 15 years in development.</p>
            </div>
                <div>
                    <Link to="/commanders" style={{ textDecoration: "none", color: "inherit" }}>   
                        <h2>Insert hero carousel here. Copy from Commanders but use Character.Thumbnail, render 3 rows stacked ontop of each other</h2>
                        <h2>Insert Highlight carousel here. What that is, I do not yet know. Screenshots?</h2>
                    </Link>
                </div>
            <div className="flexColumn center-content">
                    <h2 className='HomeTitle'>About:</h2>
                    <GamePage/>
            </div>
        </div>
    );
}