import react from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './items.css';

const ItemsRenderer = ({items}) => {
  
  if (!items) return <h2>Item "{decodedName}" not found.</h2>;

    return (
        <div className='flexColumn'>
            <div>
                <div className='itemTitle'>
                    <h3>{item.name}</h3>
                    <p>{item.flavor}</p>
                    <p>{item.cost}</p>
                    <p>{item.source}</p>
                </div>

                <div className='itemAbility'>
                    <h2>{item.ability.abilityName}</h2>
                    <p>{item.ability.abilityDisc}</p>
                </div>

                <div className='itemComponents'>
                    {items.map(item => (
                    <p key={item.id}>{item.component}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemsRenderer;

// This renders the items for ItemsMain.jsx