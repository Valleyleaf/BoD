import React from "react";
import { Link } from "react-router-dom";
import {Example, Characters} from '../../assets/Info/Characters'
import "./commanders.css"

function Commanders(){
    const renderItems = () => {
        return Example.map((data, id) => (
            <div key={id} >
                <div className='heroFrame'>
                    <img className='thumbnail' src={data.thumbnail} alt={data.thumbnailAlt} loading="lazy" onError={(e) => { e.target.src = ''; }} />
                    <h2 className=''>{data.title}</h2>
                </div>
            </div>
          ));
    }

    return(
            <div className='roster'>
                {renderItems()}
            </div>
    );
};

export default Commanders;