import {React, useEffect, useState } from "react";
import "./commanders.css"
// import {mongoClient} from "mongodb"
import {Characters} from '../Info/Characters'

// export const getStaticProps = async (context) => {
//     let client;

//     try {
//         const mongoClient = new MongoClient(process.env.MONGODB_URI);
//         await mongoClient.connect();
//         client = mongoClient;

//         const data = await mongoClient.db().collection("commanders").find({}).toArray();

//         return {
//             props: {
//                 data: JSON.parse(JSON.stringify(data)),
//             },
//         };
//     } catch (error) {
//         console.error('MongoDB connection failed:', error);
//         return {
//             props: {
//                 data: [],
//             },
//         };
//     } finally {
//         if (client) {
//             await client.close();
//         }
//     }
// };




function Commanders(){
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