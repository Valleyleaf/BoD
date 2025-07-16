import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).json({ error: "Not found" });
  res.json(article);
});

export default router;