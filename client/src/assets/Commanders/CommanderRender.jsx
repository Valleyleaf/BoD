import { useParams } from 'react-router-dom';
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
    <div className='testingFrame'>
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
          <div className="flexColumn">
            <div className="flexRow">
              <h2>Primary Attribute: </h2>
              <p style={{ color: attributeColors[character.primaryStat] || "black" }}>
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
        <h2>BREAK REMOVE BELOW IF ABOVE WORKS</h2>
        <h2 className='Bio'>Lore:</h2>
        {/* If: Does Lore.bio exist and is it an array, if so do*/}
        {character.lore && Array.isArray(character.lore.bio) ? (
          <div className="BioFrame flexColumn">
            {character.lore.bio.map((text, i) => <p key={i}>{text}</p>)}
            {/* Changed p to text for easier read */}
          </div>
          // Else if: Lore.bio is a string, render it as a single block (example: N/A).
        ) : character.lore && typeof character.lore === "string" ? (
          <div className="BioFrame">{character.lore}</div>
        ) : (
          //Else: If nothing is available, use the placeholder.
          <div className="BioFrame">{bioplaceholder.bio ? bioplaceholder.bio.join('\n') : "No lore available."}</div>
        )}
      </div>
    </div>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
