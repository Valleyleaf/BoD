import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Characters from '../Info/Commanders/A_index';
import AbilityRender from './AbilityRender.jsx'
import StatRenderer from './StatRenderer.jsx';
import DifficultyRender from './DifficultyRender.jsx';
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import CommanderBio from './CommanderBioRender.jsx';
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

  if (!character) return <h2>Character "{decodedName}" not found.</h2>;
  
  return (
    <div className=''>
      <div className="CommanderNamePlate">
        <h1 className='name CharacterRenderFont'>{character.name}</h1>
        <h2 className='title CharacterRenderFont'>The {character.title}</h2>
          <DifficultyRender character={character}/>
          <div className='flexRow'>
                <h2 className='PrimaryStat'>Primary:&nbsp;</h2>
                <p className='PrimaryStat' style={{ color: attributeColors[character.primaryStat] || "white" }}>
                  {character.primaryStat}
                </p>
          </div>
      </div>
      <div className="flexRow">
        <div className='flexColumn'>
        <img className="DisplayImage" src={character.image} alt={character.name} />
        <p className='characterDescription'>{character.description}</p>
          <div className="flexColumn CommanderSideProfile">
          </div>
          <div>
            <StatRenderer/>
              <p>Faction: {character.faction}</p>
              <p>Roles: {character.roles.join(', ')}</p>
          </div>
        </div>
        <div className="flexColumn">
        <h1 className='CharacterRenderFont'>Abilities</h1>
        <div className='AbilityBox'>
          <AbilityRender character={character}/>
        </div>
      </div>
        </div>
      <div>
        <CommanderBio/>
      </div>
    </div>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
