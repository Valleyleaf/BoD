import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AbilityRender from './AbilityRender.jsx';
import StatRenderer from './StatRenderer.jsx';
import DifficultyRender from './DifficultyRender.jsx';
import CommanderBio from './CommanderBioRender.jsx';
import "./commanderRender.css";

function CommanderDetail() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const decodedName = decodeURIComponent(name);

  const attributeColors = {
    Strength: "var(--strength-color)",
    Agility: "var(--agility-color)",
    Intelligence: "var(--intelligence-color)"
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/commanders?slug=${name}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  if (loading) return <h2>Loading...</h2>;
  if (!character) return <h2>Character "{decodedName}" not found.</h2>;

  return (
    <div>
      <div className="CommanderNamePlate">
        <h1 className='name CharacterRenderFont'>{character.name}</h1>
        <h2 className='title CharacterRenderFont'>The {character.title}</h2>
        <DifficultyRender character={character}/>
      </div>
      <div className="flexRow">
        <div className='flexColumn'>
          <img className="DisplayImage" src={character.image} alt={character.name} />
          <div className="flexColumn CommanderSideProfile"></div>
          <div>
            <StatRenderer character={character}/>
            <div className="flexRow">
              <h2>Primary:&nbsp;</h2>
              <p className='PrimaryStat' style={{ color: attributeColors[character.primaryStat] || "black" }}>
                {character.primaryStat}
              </p>
            </div>
            <p>Faction: {character.faction}</p>
            <p>Roles: {character.roles.join(', ')}</p>
          </div>
        </div>
        <div className="flexColumn">
          <h1 className='CharacterRenderFont'>Abilities</h1>
          <AbilityRender character={character}/>
        </div>
      </div>
      <div>
        <CommanderBio character={character}/>
      </div>
    </div>
  );
}

export default CommanderDetail;
