import React from "react";


const DifficultyStars = ({ difficulty }) => {
  return (
    <div className="difficulty-stars">
      {difficulty > 0 ? (
        Array.from({ length: difficulty }, (_, i) => (
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
};

export default DifficultyStars;
