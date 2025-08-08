const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class CommanderService {
  async getAllCommanders() {
    try {
      const response = await fetch(`${API_BASE}/commanders`);
      if (!response.ok) {
        throw new Error('Failed to fetch commanders');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching commanders:', error);
      throw error;
    }
  }

  async getCommanderBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE}/commanders/slug/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch commander');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching commander:', error);
      throw error;
    }
  }

  async getCommanderById(id) {
    try {
      const response = await fetch(`${API_BASE}/commanders/id/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch commander');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching commander:', error);
      throw error;
    }
  }
}

export default new CommanderService();
