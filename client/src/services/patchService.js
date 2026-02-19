const API_BASE = import.meta.env.VITE_API_URL || '/api';

class PatchService {
  async getAllPatches() {
    try {
      const response = await fetch(`${API_BASE}/patches`);
      if (!response.ok) {
        throw new Error('Failed to fetch patches');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching patches:', error);
      throw error;
    }
  }

  async getPatchBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE}/patches/slug/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch patch');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching patch:', error);
      throw error;
    }
  }

  async getPatchById(id) {
    try {
      const response = await fetch(`${API_BASE}/patches/id/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch patch');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching patch:', error);
      throw error;
    }
  }
}

export default new PatchService();
