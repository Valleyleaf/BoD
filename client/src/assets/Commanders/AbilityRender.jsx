
import React from "react";
import placeholder from '../img/placeholder.png';
import './abilityRender.css';

function AbilityRender({ character }) {
    if (!character) return <h2>Character data is missing.</h2>;

    return (
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
                        {ability.disc ? (                        
                            <p className='abilityInfo' onError={(e) => { e.target.src = 'unable to load disc'; }}
                            >{ability.disc}</p>
                            ):(
                            <p>Ability description empty</p>
                            )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AbilityRender;
