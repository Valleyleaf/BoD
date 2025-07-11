import { useParams } from 'react-router-dom';
import Characters from '../Info/Commanders/A_index';
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import "./commanderRender.css";

function CommanderBio() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);

  if (!character) return <h2>Characterbio component "{decodedName}" not found.</h2>;
  
  return (
    //Add back button later.
    <div className='flexColumn'>
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
  );
}

export default CommanderBio;