import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import AbilityRender from './AbilityRender.jsx';
import StatRenderer from './StatRenderer.jsx';
import DifficultyRender from './DifficultyRender.jsx';
import CommanderBio from './CommanderBioRender.jsx';
=======
import {Link} from 'react-router-dom';
import AbilityRender from './AbilityRender/AbilityRender.jsx'
import StatRenderer from './StatRender/StatRenderer.jsx';
import DifficultyRender from './DifficultyRender/DifficultyRender.jsx';
import bioplaceholder from '../Info/LoreSheets/A_PlaceholderBio.json'
import Loading from '../Loading/Loading.jsx'
import CommanderBio from './BioRender/CommanderBioRender.jsx';
>>>>>>> 11835c2824be139d2910a197ac6798b62ef160da
import "./commanderRender.css";
import commanderService from '../../services/commanderService';

function CommanderDetail() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
  const [error, setError] = useState(null);
  
>>>>>>> 11835c2824be139d2910a197ac6798b62ef160da
  const decodedName = decodeURIComponent(name);

  const attributeColors = {
    Strength: "var(--strength-color)",
    Agility: "var(--agility-color)",
    Intelligence: "var(--intelligence-color)"
  };

  useEffect(() => {
<<<<<<< HEAD
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
=======
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
                      {/* Above is adapted to Collector due to double primaryStat. might change to a gradient var() later? */}
                </div>
            </div>
        {/* <img className="DisplayImage" src={character.image} alt={character.name} /> */}
        <p className='characterDescription'>{character.description}</p>
          <div className="flexColumn CommanderSideProfile">
          </div>
          <div>
            <StatRenderer character={character}/>
              <div className='flexRow'>
                <p className='Bio'>Faction: </p>
                <p className='Bio'>{character.faction}</p>
                {/* Line 78 will need a function to display a vector logo based on character faction after the name once I have those done. */}
              </div>
              <div className='flexRow'>
                <p className='Bio'>Roles:</p>
                <p className='Bio'>{character.roles.join(', ')}</p>
                {/* Make class logos instead of text? */}
              </div>
          </div>
        </div>
        <div className="abilityContainer">
        <h1 className='abilityHeader'>Abilities</h1>
        <div className='AbilityBox'>
          <AbilityRender character={character}/>
        </div>
      </div>
>>>>>>> 11835c2824be139d2910a197ac6798b62ef160da
        </div>
      </div>
      <div>
<<<<<<< HEAD
        <CommanderBio character={character}/>
=======
  <CommanderBio character={character}/>
>>>>>>> 11835c2824be139d2910a197ac6798b62ef160da
      </div>
    </div>
  );
}

export default CommanderDetail;
