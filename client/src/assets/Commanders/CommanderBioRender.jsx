
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import "./commanderRender.css";

function CommanderBio({ character }) {
  if (!character) return <h2>Characterbio component not found.</h2>;
  
  return (
    <div className='flexColumn'>
        <h2 className='Bio'>Lore:</h2>
        {character.lore && character.lore.bio ? (
          Array.isArray(character.lore.bio) ? (
            <div className="BioFrame flexColumn">
              {character.lore.bio.map((text, i) => <p key={i}>{text}</p>)}
            </div>
          ) : (
            <div className="BioFrame flexColumn">
              <p>{character.lore.bio}</p>
            </div>
          )
        ) : character.lore && typeof character.lore === "string" ? (
          <div className="BioFrame">{character.lore}</div>
        ) : (
          <div className="BioFrame">{bioplaceholder.bio ? bioplaceholder.bio : "No lore available."}</div>
        )}
      </div>
  );
}

export default CommanderBio;