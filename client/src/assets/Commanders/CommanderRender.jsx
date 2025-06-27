import { useParams } from 'react-router-dom';
import {Characters} from '../Info/Characters.js';
import AbilityRender from './AbilityRender.jsx'
import StatRenderer from './StatRenderer.jsx';
import DifficultyRender from './DifficultyRender.jsx';
import "./commanderRender.css";

function CommanderDetail() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);
  const attributeColors = {
    Strength: "var(--strength-color)",
    Agility: "var(--agility-color)",
    Intelligence: "var(--intelligence-color)"
  };
  //Remember to define colors in app.css later.

  if (!character) return <h2>Character "{decodedName}" not found.</h2>;
  
  return (
    //Add back button later.
    <div className='testingFrame'>
      
      <div className="flexColumn">
        <h1>{character.name}</h1>
        <h2>{character.title}</h2>
        <DifficultyRender character={character}/>
      </div>
      <div className="flexRow">
        <img className="DisplayImage" src={character.image} alt={character.name} />
          <div className="flexColumn">
            <p style={{ color: attributeColors[character.primaryStat] || "black" }}>
            Primary Attribute: {character.primaryStat}
            </p>
                <StatRenderer/>
                <p>Faction: {character.faction}</p>
                <p>Roles: {character.roles}</p>
                <p>Backstory: {character.lore}</p>
          </div>
        </div>
      <div className="flexColumn">
        <h1>Abilities</h1>
        <AbilityRender character={character}/>
      </div>
    </div>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
