import react from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './items.css';

const ItemsRenderer = ({items}) => {

  if (!items) return <h2>Items not found.</h2>;

    return items.map((data) => (
        <div className='flexColumn'>
            <div className='itemCardgrid'>
                <div className='itemCard' key={data.id}>
                    <img src={data.image} alt={data.name} />
                </div>
            </div>
        </div>

    ));
};

export default ItemsRenderer;

// This renders the items for ItemsMain.jsx