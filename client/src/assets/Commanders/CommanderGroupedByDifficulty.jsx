import React from "react";
import CommanderRenderDefault from './CommanderRenderDefault.jsx';

function CommanderGroupedByDifficulty({ commanders }) {
  // Group commanders by difficulty (1-5)
  const groups = [1, 2, 3, 4, 5].map(stars => ({
    stars,
    commanders: commanders.filter(c => c.difficulty === stars)
  }));
  const star = 'https://res.cloudinary.com/dvutcekav/image/upload/v1760391057/DifficultyIcon_nqklrj.svg'
  const noStar = 'https://res.cloudinary.com/dvutcekav/image/upload/v1760391087/DifficultyIconEmpty_oqyzpa.svg'
  
  return (
    <div className="flexColumn">
      {groups.map(group =>
        group.commanders.length > 0 && (
          <div key={group.stars}>
            <h3>
              {Array.from({ length: group.stars }, (_, i) => (
                <img
                  className="DifficultyIcon"
                  key={`filled-${i}`}
                  src={star}
                  alt={`Difficulty Star ${i + 1}`}
                />
              ))}
              {Array.from({ length: 5 - group.stars }, (_, i) => (
                <img
                  className="DifficultyIcon"
                  key={`empty-${i}`}
                  src={noStar}
                  alt={`Empty Difficulty Star ${i + 1}`}
                />
              ))}
            </h3>
            <div className="roster comList">
              <CommanderRenderDefault commanders={group.commanders} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CommanderGroupedByDifficulty;
//Change this to display the actual stars rather then the ascii stuff (★ and ☆).
//Grouped vs linear list?