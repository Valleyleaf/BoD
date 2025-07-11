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
      <Link 
          to="/Commanders"
          className='buttonClass'>
          Back to Commanders
      </Link>
      <div className="CommanderNamePlate">
        <h1 className='name CharacterRenderFont'>{character.name}</h1>
        <h2 className='title CharacterRenderFont'>The {character.title}</h2>
        <DifficultyRender character={character}/>
      </div>
      <div className="flexRow">
        <img className="DisplayImage" src={character.image} alt={character.name} />
          <div className="flexColumn CommanderSideProfile">
            <div className="flexRow center-content">
              <h2>Primary:&nbsp;</h2>
              {/* &nbsp; = Space */}
              <p className='PrimaryStat' style={{ color: attributeColors[character.primaryStat] || "black" }}>
                  {character.primaryStat}
              </p>
            </div>
                <StatRenderer/>
                <p>Faction: {character.faction}</p>
                <p>Roles: {character.roles.join(', ')}</p>
          </div>
        </div>
      <div className="flexColumn">
        <h1 className='CharacterRenderFont'>Abilities</h1>
        <AbilityRender character={character}/>
      </div>
      <div>
        <CommanderBio/>
      </div>
    </div>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
