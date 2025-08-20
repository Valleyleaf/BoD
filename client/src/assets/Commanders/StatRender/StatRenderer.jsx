
import React from "react";
import "./StatRender.css";

function StatRenderer({ character }) {
    const attributeIcons = [
        'https://i.imgur.com/rNlN5Ei.jpeg', // Strength
        'https://i.imgur.com/7VoQYMM.jpeg', // Agility
        'https://i.imgur.com/2IggFL9.jpeg'  // Intelligence
    ];
    if (!character) return <h2>Character stats data is missing.</h2>;

    return (
        <div className="flexColumn">
            {attributeIcons.map((icon, i) => (
                <div key={i} className="flexRow statRenderBox">
                    <img className='attributeIcon' src={icon} alt={["Strength", "Agility", "Intelligence"][i]} />
                    <h2 className="statsText">{character.stats[i]}</h2>
                </div>
            ))}
        </div>
    );
}

export default StatRenderer;
