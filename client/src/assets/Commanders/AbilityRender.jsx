import React from "react";
import {Characters} from '../Info/Characters.js';
import './CommanderRender.css';

function abilityRender() {
    const renderAllAbilities = () => {
        return [0, 1, 2, 3, 4].map((i) => {
          const abilityArray = Characters[`ability${i}`];
          return abilityArray.map((data, index) => (
            <div key={`ability${i}-${index}`} className="flexRow">
              <div className="flexColumn">
                <h1>{data.name}</h1>
                <img src={data.thumbnail} alt={`Ability${i}Thumbnail`} />
              </div>
              <div className="flexColumn">
                <div className="flexRow">
                  <img src="" alt="manaCost" />
                  <p>{data.cost}</p>
                </div>
                <div>
                  <p>{data.disc}</p>
                </div>
              </div>
            </div>
          ));
        });
      };
      
    //Renders each ability

    if (!character) return <h2>Information "{decodedName}" missing.</h2>;

    return Characters.map((data) => 
        <div classname="flexColumn">
            {renderAllAbilities()}
        </div>
    );
    //Renders fake grid.
};

export default abilityRender;