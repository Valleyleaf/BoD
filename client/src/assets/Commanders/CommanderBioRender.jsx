
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import "./commanderRender.css";


function CommanderBio({ character }) {
  if (!character || !character.lore || !Array.isArray(character.lore.bio)) {
    return (
      <div className='flexColumn'>
        <h2 className='Bio'>Lore:</h2>
        <div className="BioFrame flexColumn">
          {bioplaceholder.bio ? bioplaceholder.bio.map((text, i) => <p key={i}>{text}</p>) : "No lore available."}
        </div>
      </div>
    );
  }
  return (
    <div className='flexColumn'>
      <h2 className='Bio'>Lore:</h2>
      <div className="BioFrame flexColumn">
        {character.lore.title && <h2 className='BioTitle'>{character.lore.title}</h2>}
        {character.lore.bio.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  );
}

export default CommanderBio;