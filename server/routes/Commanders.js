import express from "express";
import Commander from "../models/Commander.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const commanders = await Commander.find();
  res.json(commanders);
});

router.get("/slug/:slug", async (req, res) => {
  const commander = await Commander.findOne({ slug: req.params.slug });
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
});

router.get("/:id", async (req, res) => {
  const commander = await Commander.findById(req.params.id);
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
});

export default router;