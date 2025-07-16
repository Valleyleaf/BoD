import React from "react";
import placeholder from '../img/placeholder.png';
import './CommanderRender.css';

function AbilityRender({ character }) {
    if (!character) return <h2>Character data is missing.</h2>;

    return (
        <div className="flexColumn AbilityBox">
            {character.abilities?.map((ability, i) => (
                <div key={`ability-${i}`} className="flexRow Ability">
                    <div className="flexColumn">
                        {ability.thumbnail ? (
                            <img className="abilityThumbnail" src={ability.thumbnail} alt={`Ability${i}Thumbnail`} onError={(e) => { e.target.src = placeholder; }} />
                        ) : (
                            <img className="abilityThumbnail" src={placeholder} alt="Placeholder"/>
                        )}
                        <p className="abilityTitle">{ability.name}</p>
                    </div>
                    <div className="flexColumn">
                        <div className="flexRow">
                            <p>{ability.cost}</p>
                        </div>
                        {ability.disc ? (
                            <p className='abilityInfo'>{ability.disc}</p>
                        ) : (
                            <p>Ability description empty</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AbilityRender;
