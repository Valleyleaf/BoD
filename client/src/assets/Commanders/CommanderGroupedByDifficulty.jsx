import React from "react";
import CommanderRenderDefault from './CommanderRenderDefault.jsx';

function CommanderGroupedByDifficulty({ commanders }) {
  // Group commanders by difficulty (1-5)
  const groups = [1, 2, 3, 4, 5].map(stars => ({
    stars,
    commanders: commanders.filter(c => c.difficulty === stars)
  }));

  return (
    <div className="commander-grouped-by-difficulty">
      {groups.map(group =>
        group.commanders.length > 0 && (
          <div key={group.stars} className="difficulty-group">
            <h3>
              {Array(group.stars).fill("★").join("")}
              {Array(5 - group.stars).fill("☆").join("")}
            </h3>
            <CommanderRenderDefault commanders={group.commanders} />
          </div>
        )
      )}
    </div>
  );
}

export default CommanderGroupedByDifficulty;