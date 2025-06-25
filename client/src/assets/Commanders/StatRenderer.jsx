import React from "react";
import { useParams } from 'react-router-dom';
import { Characters } from '../Info/Characters.js';
import './CommanderRender.css';

function StatRenderer() {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);
    const attributeIcons = [
        'https://i.imgur.com/rNlN5Ei.jpeg', // Strength
        'https://i.imgur.com/7VoQYMM.jpeg', // Agility
        'https://i.imgur.com/2IggFL9.jpeg'  // Intelligence
    ];
    if (!character) return <h2>Character "{decodedName}" data is missing.</h2>;

    return (
        <div className="flexColumn">
            <p>Stats:</p>
            {attributeIcons.map((icon, i) => (
                <div key={i} className="flexRow">
                    <img className='attributeIcon' src={icon} alt={["Strength", "Agility", "Intelligence"][i]} />
                    {character.stats[i]}
                </div>
            ))}
        </div>
    );
}

export default StatRenderer;
