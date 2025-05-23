// src/components/CharacterDetail.jsx
import { useParams } from 'react-router-dom';
import {Characters} from '../Info/Characters.js';


function CommanderDetail() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);

  if (!character) return <h2>Character "{decodedName}" not found.</h2>;

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.title}</h2>
      <img src={character.image} alt={character.name} />
      <p>Primary Attribute: {character.primaryAttribute}</p>
    </div>
  );
}

export default CommanderDetail;
