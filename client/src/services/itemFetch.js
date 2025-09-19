  import React, { useState, useEffect } from "react";

  import itemService from '../../services/itemService';

  function itemFetch() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
}

export default itemFetch;