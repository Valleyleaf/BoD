
import React from "react";
import "./roleRender.css";

function RoleRender({ character }) {

      
    if (!character) return <h2>Character name data is missing.</h2>;

    return (
        <div className="">
                <div className='flexRow'>
                  <p className='faction'>Faction: </p>
                  <p className='faction'>{character.faction}</p>
                  {/* Line 78 will need a function to display a vector logo based on character faction after the name once I have those done. */}
                </div>
                <div className='roleList'>
                  <div>
                    <p className='roleTitle'>Roles</p>
                    <div className="roleDivider"></div>
                  </div>
                  {/* <p className='roles'>{character.roles.join(', ')}</p> */}
                  <div>
                    {character.roles.map((text, i) => <p key={i} className='roles'>{text}</p>)}
                  </div>
                </div>
            </div>
    );
}

export default RoleRender;
