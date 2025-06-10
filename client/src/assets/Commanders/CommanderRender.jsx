// src/components/CharacterDetail.jsx
import { useParams } from 'react-router-dom';
import {Characters} from '../Info/Characters.js';
import './CommanderRender.css';


function CommanderDetail() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);

  if (!character) return <h2>Character "{decodedName}" not found.</h2>;

  return (
    <div className="CommanderRenderMain">
      <h1 className='name bebas-neue-regular'>{character.name}</h1>
      <div className='CommanderRenderSecond'>
        <img className='DisplayImage' src={character.image} alt={character.name} />
        <div className='CommanderRendermain'>
          <h2 className='title bebas-neue-regular'>{character.title}</h2>
          <p>{character.description}</p>
          <p>Lore:{character.lore}</p>
          <p>Stats:{character.stats}</p>
          <p>Faction: {character.faction}</p>
          <p>{character.roles}</p>
          <p>Primary Attribute: {character.primaryStat}</p>
        </div>
      </div>
    </div>
  );
}

export default CommanderDetail;
