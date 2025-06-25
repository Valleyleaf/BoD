import { useParams } from 'react-router-dom';
import {Characters} from '../Info/Characters.js';
import AbilityRender from './AbilityRender.jsx'
import StatRenderer from './StatRenderer.jsx';
import "./commanders.css";

function CommanderDetail() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);

  if (!character) return <h2>Character "{decodedName}" not found.</h2>;
  
  return (
    <div className='testingFrame'>
      <div className="flexColumn">
        <h1>{character.name}</h1>
        <h2>{character.title}</h2>
      </div>
      <div className="flexRow">
        <img className="DisplayImage" src={character.image} alt={character.name} />
          <div className="flexColumn">
            <p>Primary Attribute: {character.primaryAttribute}</p>
                <StatRenderer/>
                <p>Faction:{character.faction}</p>
                <p>Roles" {character.roles}</p>
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
