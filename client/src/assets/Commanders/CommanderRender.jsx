import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import AbilityRender from './AbilityRender.jsx'
import StatRenderer from './StatRenderer.jsx';
import DifficultyRender from './DifficultyRender.jsx';
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import Loading from '../Loading/Loading.jsx'
import CommanderBio from './CommanderBioRender.jsx';
import "./commanderRender.css";
import commanderService from '../../services/commanderService';

function CommanderDetail() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const decodedName = decodeURIComponent(name);
  const attributeColors = {
    Strength: "var(--strength-color)",
    Agility: "var(--agility-color)",
    Intelligence: "var(--intelligence-color)"
  };

  useEffect(() => {
    let intervalId;
    const fetchCommander = async () => {
      try {
        const data = await commanderService.getCommanderBySlug(name);
        setCharacter(data);
      } catch (err) {
        setError('Commander not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommander();
    intervalId = setInterval(fetchCommander, 60000); // Poll every 60 seconds
    return () => clearInterval(intervalId);
  }, [name]);

  if (loading) return <Loading/>;
  if (error || !character) return <h2>Character "{decodedName}" not found.</h2>;
  
  return (
    <div className='commanderContainer'>
      <div className="commanderBackground"       
        style={{
        backgroundImage: `url(${character.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='flexColumn' >
            <div className="CommanderNamePlate">
              <h1 className='name'>{character.name}</h1>
              <h2 className='title'>The {character.title}</h2>
                <DifficultyRender character={character}/>
                <div className='flexRow'>
                      <h2 className='PrimaryStat'>Primary:&nbsp;</h2>
                      <p className='PrimaryStat' style={{ color: attributeColors[character.primaryStat] || "white" }}>
                        {character.primaryStat}
                      </p>
                </div>
            </div>
        {/* <img className="DisplayImage" src={character.image} alt={character.name} /> */}
        <p className='characterDescription'>{character.description}</p>
          <div className="flexColumn CommanderSideProfile">
          </div>
          <div>
            <StatRenderer character={character}/>
              <p>Faction: {character.faction}</p>
              <p>Roles: {character.roles.join(', ')}</p>
          </div>
        </div>
        <div className="abilityContainer">
        <h1 className='abilityHeader'>Abilities</h1>
        <div className='AbilityBox'>
          <AbilityRender character={character}/>
        </div>
      </div>
        </div>
      <div>
  <CommanderBio character={character}/>
      </div>
    </div>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
