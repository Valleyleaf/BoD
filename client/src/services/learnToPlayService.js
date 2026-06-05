const API_BASE = import.meta.env.VITE_API_URL || '/api';

class LearnToPlayService {
  async getl2pData() {
    try {
      const response = await fetch(`${API_BASE}/LearntoPlay`);
      if (!response.ok) {
        throw new Error('Failed to fetch Learn to Play data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching Learn to Play data:', error);
      throw error;
    }
  }

  // async getCommanderBySlug(slug) {
  //   try {
  //     const response = await fetch(`${API_BASE}/commanders/slug/${slug}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch commander');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error fetching Learn to Play data:', error);
  //     throw error;
  //   }
  // }

  // async getCommanderById(id) {
  //   try {
  //     const response = await fetch(`${API_BASE}/commanders/id/${id}`);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch commander');
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error fetching commander:', error);
  //     throw error;
  //   }
  // }
}

export default new LearnToPlayService();
