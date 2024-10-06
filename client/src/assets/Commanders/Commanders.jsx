import React from "react";
import { Link } from "react-router-dom";
import {Example, Characters} from '../Info/Characters'
import "./commanders.css"
// import displayUnit from '../../utils/unitAPI'

function Commanders(){
    const renderItems = () => {
        return Example.map((data, id) => (
            <div key={id} className='heroFrame comImg'>
                    <img className='thumbnail' src={data.thumbnail} alt={data.thumbnailAlt} loading="lazy" onError={(e) => { e.target.src = ''; }} />
                    <h2 className='hoverTitle'>{data.title}</h2>
            </div>
          ));
    }

    return(
            <div className='roster comList'>
                {renderItems()}
            </div>
    );
};

export default Commanders;