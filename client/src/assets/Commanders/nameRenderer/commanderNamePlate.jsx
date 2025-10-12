
import React from "react";
import DifficultyRender from "../DifficultyRender/DifficultyRender.jsx";
import "./nameRender.css";

function NameRenderer({ character }) {
      const attributeColors = {
        Strength: "var(--strength-color)",
        Agility: "var(--agility-color)",
        Intelligence: "var(--intelligence-color)"
      };
      
    if (!character) return <h2>Character name data is missing.</h2>;

    return (
        <div className="CommanderNamePlate">
              <h1 className='name'>{character.name}</h1>
              <h2 className='title'>The {character.title}</h2>
                <DifficultyRender character={character}/>
                <div className='flexRow'>
                      <h2 className='PrimaryStat'>Keystone:&nbsp;</h2>
                      <p className='PrimaryStat' style={{ color: attributeColors[character.primaryStat] || "white" }}>
                        {character.primaryStat}
                      </p>
                      {/* Above is adapted to Collector due to double primaryStat. might change to a gradient var() later? */}
                </div>
            </div>
    );
}

export default NameRenderer;
