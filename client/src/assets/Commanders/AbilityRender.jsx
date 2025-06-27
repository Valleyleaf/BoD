import React from "react";
import { useParams } from 'react-router-dom';
import { Characters } from '../Info/Characters.js';
import './CommanderRender.css';

function AbilityRender() {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);
    //Is the above needed?
    if (!character) return <h2>Character "{decodedName}" data is missing.</h2>;

    return (
        //Add hover option below for expanded ability information. Not VIP but would be cool.
        <div className="flexColumn">
            {character.abilities?.map((ability, i) => (
                <div key={`ability-${i}`} className="flexRow">
                    <div className="flexColumn">
                        <p>{ability.name}</p>
                        {ability.thumbnail && (
                            <img className="abilityThumbnail" src={ability.thumbnail} alt={`Ability${i}Thumbnail`} />
                        )}
                    </div>
                    <div className="flexColumn">
                        <div className="flexRow">
                            <p>{ability.cost}</p>
                        </div>
                        <p>{ability.disc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AbilityRender;
