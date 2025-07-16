import React from "react";
import { useParams } from 'react-router-dom';
import Characters from '../Info/Commanders/A_index';
import './commanderRender.css';

function StatRenderer() {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);
    const attributeIcons = [
        'https://i.imgur.com/rNlN5Ei.jpeg', // Strength
        'https://i.imgur.com/7VoQYMM.jpeg', // Agility
        'https://i.imgur.com/2IggFL9.jpeg'  // Intelligence
    ];
    if (!character) return <h2>Character stats "{decodedName}" data is missing.</h2>;

    return (
        <div className="flexRow">
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

//This does not feel like the best way of doing this, but it works for now.
