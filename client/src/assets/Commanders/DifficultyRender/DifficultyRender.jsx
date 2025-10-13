import React from "react";
import './difficultyrender.css';

function DifficultyRender({ character }) {
  const star = 'https://res.cloudinary.com/dvutcekav/image/upload/v1760391057/DifficultyIcon_nqklrj.svg'
  const noStar = 'https://res.cloudinary.com/dvutcekav/image/upload/v1760391087/DifficultyIconEmpty_oqyzpa.svg'
    if (!character) return <h2>Character difficulty "{decodedName}" data is missing.</h2>;

    return (
        <div>
          {/* Render a star for each difficulty point, or a message if 0 */}
          {character.difficulty > 0 ? (
            Array.from({ length: character.difficulty }, (_, i) => (
              <img
                className="DifficultyIcon"
                key={i}
                src={star}
                alt={`Difficulty Star ${i + 1}`}
              />
            ))
          ) : (
            <span>
                <img 
                className="DifficultyIcon" 
                src={noStar} 
                alt="No Difficulty" 
                />
            </span>
          )}
        </div>
    );
}

export default DifficultyRender;
