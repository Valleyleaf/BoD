import react from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {strengthItems, } from './Items.js';
import './items.css';

function ItemsRenderer(){
const { name } = useParams();
  const Item = Items.find(c => c.slug === name);
  const decodedName = decodeURIComponent(name);
  
  if (!Item) return <h2>Item "{decodedName}" not found.</h2>;

    return (
        <div className='flexColumn'>
            <h2>ItemRenderer</h2>
            <Link
                to="/Items"
                className='buttonClass'>
                Back to Items
            </Link>
            <div>
                
            </div>
        </div>

    );
}

export default ItemsRenderer;

// This renders the items for ItemsMain.jsx