import react from 'react';
import ItemsRender from './ItemsRender.jsx';
import './ItemsMain.css';


function ItemsMain() {
  return (
    <div className='flexColumn'>
        <div className='fade-slide-up'>
            <h2>Items</h2>
            <p>Items are a crucial part of the game, providing various benefits and enhancing your Commander's abilities.</p>
            <p>Each item has unique properties and can be combined with others to create powerful synergies.</p>
            <p>Explore the items to find the best combinations for your playstyle!</p>
        </div>
        <ItemsRender />
    </div>
  );
}

export default ItemsMain;

// This renders the item page