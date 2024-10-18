import {React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Characters} from '../Info/Characters'
import "./commanders.css"
// import displayUnit from '../../utils/unitAPI'

function Commanders(){

    const [commanders, setItems] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/items')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderItems = () => {
        return Characters.map((data, id) => (
            <div key={id} className='heroFrame comImg'>
                    <img className='thumbnail' src={data.thumbnail} alt={data.thumbnailAlt} loading="lazy" onError={(e) => { e.target.src = ''; }} />
                    <h2 className='hoverTitle'>{data.title}</h2>
            </div>
          ));
    }

    return(
            <div className="fade-slide-up">
                <div className='roster comList'>
                    {renderItems()}
                </div>
            </div>
    );
};

export default Commanders;