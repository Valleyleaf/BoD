import {React, useEffect, useState } from "react";
import "./commanders.css"
import {Characters} from '../Info/Characters'

export async function getStaticProps() {
    const { MongoClient } = await import("mongodb");
    const uri = process.env.MONGODB_URI;

    let client;

    try {
        client = new MongoClient(uri);
        await client.connect();

        const data = await client.db().collection("commanders").find({}).toArray();

        return {
            props: {
                data: JSON.parse(JSON.stringify(data)),
            },
        };
    } catch (error) {
        console.error("Error fetching MongoDB data:", error);
        return {
            props: {
                data: [],
            },
        };
    } finally {
        if (client) await client.close();
    }
}

function Commanders(){

    const [sortKey, setSortKey] = useState("Name");
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [Units, setItems] = useState([]);

    const renderItems = () => {
        return Characters.map((data) => (
            <div key={data._id} className='heroFrame comImg'>
              <img className='thumbnail' src={data.thumbnail} alt={data.thumbnailAlt} loading="lazy" onError={(e) => { e.target.src = 'default-placeholder.png'; }} />
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