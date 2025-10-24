import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NameRenderer from './nameRenderer/commanderNamePlate.jsx';
import AbilityRender from './AbilityRender/AbilityRender.jsx'
import StatRenderer from './StatRender/StatRenderer.jsx';
import RoleRenderer from './RoleRenderer/RoleRender.jsx';
import Loading from '../Loading/Loading.jsx'
import CommanderBio from './BioRender/CommanderBioRender.jsx';
import commanderService from '../../services/commanderService';
import "./commanderRender.css";

function CommanderDetail() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const decodedName = decodeURIComponent(name);


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
    <>
      <div className="commanderBackgroundWrapper">
        <div
          className="commanderBackgroundImage"
          style={{
            backgroundImage: `url(${character.image})`,
          }}
        />
        <div className="commanderContent">
          <NameRenderer character={character}/>
          <div className='characterRow'>
            <div className='flexColumn characterInfo'>
              <p className='characterDescription'>{character.description}</p>
              <div className="flexColumn CommanderSideProfile"></div>
              <div>
                <StatRenderer character={character}/>
                <RoleRenderer character={character}/>
              </div>
            </div>
            <div className="abilityContainer">
              <h1 className='abilityHeader'>Abilities</h1>
              <div className='AbilityBox'>
                <AbilityRender character={character}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CommanderBio character={character}/>
      </div>
    </>
  );
}

export default CommanderDetail;

//This is getting big, be careful and remember to break it into smaller components if needed.
