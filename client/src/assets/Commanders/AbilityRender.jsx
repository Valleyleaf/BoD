import React from "react";
import { useParams } from 'react-router-dom';
import Characters from '../Info/Commanders/A_index';
import placeholder from '../img/placeholder.png';
import './commanderRender.css';

function AbilityRender() {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);
    //Is the above needed?
    if (!character) return <h2>Character "{decodedName}" data is missing.</h2>;

    return (
        //Add hover option below for expanded ability information. Not VIP but would be cool.
        <div className="flexColumn AbilityBox">
            {character.abilities?.map((ability, i) => (
                <div key={`ability-${i}`} className="flexRow Ability">
                    <div className="flexColumn">
                        {ability.thumbnail ? (
                            <img className="abilityThumbnail" src={ability.thumbnail} alt={`Ability${i}Thumbnail`} onError={(e) => { e.target.src = 'default-placeholder.png'; }}  />
                        ):(
                            <img className="abilityThumbnail" src={placeholder} alt="Placeholder"/>
                        )}
                        
                    </div>
                    <div className="abilityText">
                        <p className="abilityTitle">{ability.name}</p>
                        {/* <div className="flexRow">
                            <p>{ability.cost}</p>
                        </div> */}
                        {ability.disc ? (                        
                            <p className='abilityInfo' onError={(e) => { e.target.src = 'unable to load disc'; }}
                            >{ability.disc}</p>
                            ):(
                            <p>Ability discription empty</p>
                            )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AbilityRender;
