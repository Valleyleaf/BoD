import {React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Characters} from '../Info/Characters'
import "./commanders.css"
// import displayUnit from '../../utils/unitAPI'

function Commanders(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [Units, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/unitRoutes')
          .then(response => response.json())
          .then(data => {
            setItems(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setError(error);
            setLoading(false);
          });
      }, []);

    const renderItems = () => {
        return Units.map((data) => (
            <div key={data._id} className='heroFrame comImg'>
              <img className='thumbnail' src={data.thumbnail} alt={data.thumbnailAlt} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }} />
              <h2 className='hoverTitle'>{data.title}</h2>
            </div>
          ));
    }

    return(
        <div className="fade-slide-up">
            {loading && <p>Loading...</p>}
            {error && <p>Failed to load data. Please try again later.</p>}
        <div className='roster comList'>
            {!loading && !error && renderItems()}
        </div>
      </div>
    );
};

export default Commanders;