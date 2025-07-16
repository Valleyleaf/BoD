import React from "react";
import { useParams } from 'react-router-dom';
import Characters from '../Info/Commanders/A_index';
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json';
import "./commanderRender.css";

function CommanderBio() {
  const { name } = useParams();
  const character = Characters.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);

  if (!character) return <h2>Characterbio component "{decodedName}" not found.</h2>;
  
  if (character && character.lore) {
    if (Array.isArray(character.lore)) {
      return (
        <div className="BioFrame flexColumn">
          {character.lore.map((text, i) => <p key={i}>{text}</p>)}
        </div>
      );
    }
    return <div className="BioFrame">{character.lore}</div>;
  }
  return (
    <div className="BioFrame">
      {bioplaceholder.bio ? bioplaceholder.bio.join('\n') : "No lore available."}
    </div>
  );
}

export default CommanderBio;