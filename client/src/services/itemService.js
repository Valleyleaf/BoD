const API_BASE = import.meta.env.VITE_API_URL || '/api';

class ItemService {
  async getAllItems() {
    try {
      const response = await fetch(`${API_BASE}/items`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }

  async getItemBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE}/items/slug/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching item:', error);
      throw error;
    }
  }

  async getItemById(id) {
    try {
      const response = await fetch(`${API_BASE}/items/id/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch item');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching item:', error);
      throw error;
    }
  }
}

export default new ItemService();
