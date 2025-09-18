
import bioplaceholder from '../../Info/LoreSheets/A_PlaceholderBio.json'
import './bioRender.css'

function CommanderBio({ character }) {
  if (!character || !character.lore || !Array.isArray(character.lore.bio)) {
    return (
      <div className='flexColumn'>
        <h2 className='Bio'>Comming Soon</h2>
        <div className="BioFrame flexColumn">
          {bioplaceholder.bio ? bioplaceholder.bio.map((text, i) => <p key={i}>{text}</p>) : "No lore available."}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="BioFrame"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.91), rgba(26,26,26,0.85)), url(https://i.imgur.com/S3Rxpw0.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
      >
        {character.lore.title && <h2 className='Bio'>{character.lore.title}</h2>}
        {character.lore.bio.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  );
}

export default CommanderBio;