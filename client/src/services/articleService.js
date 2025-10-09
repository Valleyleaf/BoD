const API_BASE = import.meta.env.VITE_API_URL || '/api';

class ArticleService {
  async getAllArticles() {
    try {
      const response = await fetch(`${API_BASE}/articles`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }

  async getArticleBySlug(slug) {
    try {
      const response = await fetch(`${API_BASE}/articles/slug/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  }

  async getArticleById(id) {
    try {
      const response = await fetch(`${API_BASE}/articles/id/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  }
}

export default new ArticleService();
