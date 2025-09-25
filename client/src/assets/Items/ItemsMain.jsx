import React, { useEffect, useState, useMemo } from 'react';
import ItemsRenderer from './ItemsRenderer.jsx';
import Loading from '../Loading/Loading.jsx';
import './items.css';

function ItemsMain() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Name");


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await itemService.getAllItems();
        setItems(data);
      } catch (err) {
        setError('Failed to load items');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

    if (loading) return <Loading/>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className='flexColumn'>
      <div className='fade-slide-up'>
        <h2>Items</h2>
        <p>Items are a crucial part of the game, providing various benefits and enhancing your Commander's abilities.</p>
        <p>Each item has unique properties and can be combined with others to create powerful synergies.</p>
        <p>Explore the items to find the best combinations for your playstyle!</p>
      </div>
      <ItemsRenderer />
    </div>
  );
}

export default ItemsMain;

// This renders the item page