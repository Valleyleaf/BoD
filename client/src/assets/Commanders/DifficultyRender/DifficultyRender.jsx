import React from "react";
import { useParams } from 'react-router-dom';
import Characters from '../../Info/Commanders/A_index';
import './difficultyrender.css';
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
                className="DifficultyIcon"
                key={i}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fstar-png%2Fstar-png-transparent-image-pngpix-5.png&f=1&nofb=1&ipt=522d07ec9aeee2658ce812a36f98270345e7925864f6296f11529463e3c72428"
                alt={`Difficulty Star ${i + 1}`}
              />
            ))
          ) : (
            <span>
                <img 
                className="DifficultyIcon" 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fstar-png%2Fstar-png-transparent-image-pngpix-5.png&f=1&nofb=1&ipt=522d07ec9aeee2658ce812a36f98270345e7925864f6296f11529463e3c72428" 
                alt="No Difficulty" 
                />
            </span>
          )}
        </div>
    );
}

export default DifficultyRender;
