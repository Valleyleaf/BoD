
import React from "react";
import "./roleRender.css";

function RoleRender({ character }) {

      
    if (!character) return <h2>Character name data is missing.</h2>;

    return (
        <div className="roleFactionContainer">
                <div className='flexRow'>
                  <p className='faction'>Faction: </p>
                  <p className='faction'>{character.faction}</p>
                </div>
                <div className='roleList'>
                  <div>
                    <p className='roleTitle'>Roles</p>
                    <div className="roleDivider"></div>
                  </div>
                  {/* <p className='roles'>{character.roles.join(', ')}</p> */}
                  <div>
                    {character.roles.map((text, i) => <p key={i} className='roles'> &diams; {text}</p>)}
                  </div>
                </div>
            </div>
    );
}

export default RoleRender;
