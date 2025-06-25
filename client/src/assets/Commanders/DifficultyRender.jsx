import React from "react";
import { useParams } from 'react-router-dom';
import { Characters } from '../Info/Characters.js';
import './CommanderRender.css';

function DifficultyRender() {
    const { name } = useParams();
    const character = Characters.find(c => c.slug === name);
    const decodedName = decodeURIComponent(name);

    if (!character) return <h2>Character difficulty "{decodedName}" data is missing.</h2>;

    return (
        <div>
          {/* Render a star for each difficulty point, or a message if 0 */}
          {character.difficulty > 0 ? (
            Array.from({ length: character.difficulty }, (_, i) => (
              <img
                key={i}
                src="https://media.tenor.com/pXEDrZV2s4QAAAAj/star-spinning.gif"
                alt="Difficulty Star"
                className="DifficultyIcon DifficultyLogo"
              />
            ))
          ) : (
            <span>
                <img 
                className="DifficultyIcon DifficultyLogo" 
                src="https://media.tenor.com/j8a8qg23pIUAAAAj/star.gif" 
                alt="No Difficulty" 
                />
            </span>
          )}
        </div>
    );
}

export default DifficultyRender;
