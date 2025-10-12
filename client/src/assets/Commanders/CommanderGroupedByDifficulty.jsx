import React from "react";
import CommanderRenderDefault from './CommanderRenderDefault.jsx';

function CommanderGroupedByDifficulty({ commanders }) {
  // Group commanders by difficulty (1-5)
  const groups = [1, 2, 3, 4, 5].map(stars => ({
    stars,
    commanders: commanders.filter(c => c.difficulty === stars)
  }));
  const star = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fstar-png%2Fstar-png-transparent-image-pngpix-5.png&f=1&nofb=1&ipt=522d07ec9aeee2658ce812a36f98270345e7925864f6296f11529463e3c72428";
  const nostar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fstar-png%2Fstar-png-transparent-image-pngpix-5.png&f=1&nofb=1&ipt=522d07ec9aeee2658ce812a36f98270345e7925864f6296f11529463e3c72428";
  
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
                  src={nostar}
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