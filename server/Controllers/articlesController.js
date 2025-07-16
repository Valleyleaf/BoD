import Articles from "../models/Articles.js";

export const getAllArticles = async (req, res) => {
  const articles = await Articles.find();
  res.json(articles);
};

export const getArticleById = async (req, res) => {
  const article = await Articles.findById(req.params.id);
  if (!article) return res.status(404).json({ error: "Not found" });
  res.json(article);
};