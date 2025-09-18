
import React from "react";
const placeholder = 'https://res.cloudinary.com/dvutcekav/image/upload/v1757090475/trade_engineering_mpfplp.jpg';
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
                        {/* Above renders the ability thumbnail below is the title and disc. */}
                    </div>
                    <div className="abilityText">
                        <p className="abilityTitle">{ability.name}</p>
                        {/* Below is basically a else/if. So if its an array, do first, second, does disc exist? if so do this, else then discription empty. */}
                        {Array.isArray(ability.disc) ? (
                            ability.disc.map((desc, idx) => (
                                <p className='abilityInfo' key={idx}>{desc}</p>
                            ))
                        ) : ability.disc ? (
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
